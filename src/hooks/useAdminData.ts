"use client";

import * as React from "react";
import { toast } from "sonner";

interface UseAdminDataOptions<T> {
  endpoint: string;
  dataKey?: string;
  transform?: (raw: unknown) => T[];
  autoFetch?: boolean;
}

interface UseAdminDataReturn<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  create: (item: Partial<T>) => Promise<T | null>;
  update: (item: Partial<T> & { id: string }) => Promise<T | null>;
  remove: (id: string) => Promise<boolean>;
  optimisticUpdate: (id: string, updates: Partial<T>) => void;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}

export function useAdminData<T extends { id: string }>({
  endpoint,
  dataKey,
  transform,
  autoFetch = true,
}: UseAdminDataOptions<T>): UseAdminDataReturn<T> {
  const [data, setData] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const prevDataRef = React.useRef<T[]>([]);

  const refresh = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const raw = dataKey ? json[dataKey] : json.data ?? json.items ?? json;
      const items = transform ? transform(raw) : (Array.isArray(raw) ? raw : []);
      setData(items);
      prevDataRef.current = items;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur de chargement";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [endpoint, dataKey, transform]);

  React.useEffect(() => {
    if (autoFetch) refresh();
  }, [autoFetch, refresh]);

  const create = React.useCallback(async (item: Partial<T>): Promise<T | null> => {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error("Erreur création");
      const json = await res.json();
      const created = json.item ?? json.data ?? json;
      setData(prev => [...prev, created]);
      toast.success("Élément créé");
      return created;
    } catch {
      toast.error("Erreur lors de la création");
      return null;
    }
  }, [endpoint]);

  const update = React.useCallback(async (item: Partial<T> & { id: string }): Promise<T | null> => {
    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error("Erreur mise à jour");
      const json = await res.json();
      const updated = json.item ?? json.data ?? json;
      setData(prev => prev.map(d => d.id === item.id ? { ...d, ...updated } : d));
      toast.success("Modifications sauvegardées");
      return updated;
    } catch {
      toast.error("Erreur lors de la mise à jour");
      return null;
    }
  }, [endpoint]);

  const remove = React.useCallback(async (id: string): Promise<boolean> => {
    const prev = [...data];
    setData(d => d.filter(item => item.id !== id));
    try {
      const res = await fetch(`${endpoint}?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erreur suppression");
      toast.success("Élément supprimé");
      return true;
    } catch {
      setData(prev);
      toast.error("Erreur lors de la suppression");
      return false;
    }
  }, [endpoint, data]);

  const optimisticUpdate = React.useCallback((id: string, updates: Partial<T>) => {
    prevDataRef.current = [...data];
    setData(prev => prev.map(d => d.id === id ? { ...d, ...updates } : d));
  }, [data]);

  return {
    data,
    loading,
    error,
    refresh,
    create,
    update,
    remove,
    optimisticUpdate,
    setData,
  };
}
