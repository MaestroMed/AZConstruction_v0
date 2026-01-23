"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Eye, EyeOff, Shield } from "lucide-react";

const SESSION_KEY = "az_admin_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 heures

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  // Vérifier la session au chargement
  React.useEffect(() => {
    const checkSession = async () => {
      try {
        const session = localStorage.getItem(SESSION_KEY);
        if (session) {
          const parsed = JSON.parse(session);
          const { expiry, hash } = parsed;
          
          // Vérifier l'expiration locale d'abord
          if (expiry && expiry > Date.now() && hash) {
            // Vérifier côté serveur
            const response = await fetch("/api/admin/verify-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ hash, expiry }),
            });
            
            if (response.ok) {
              const data = await response.json();
              if (data.valid) {
                setIsAuthenticated(true);
                return;
              }
            }
          }
          // Session invalide, la supprimer
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (e) {
        console.error("Session check error:", e);
        localStorage.removeItem(SESSION_KEY);
      }
      setIsAuthenticated(false);
    };
    
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok && data.success) {
        // Stocker la session
        const session = {
          hash: data.sessionHash,
          expiry: data.expiry || Date.now() + SESSION_DURATION,
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Mot de passe incorrect");
        setPassword("");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Erreur de connexion. Veuillez réessayer.");
    }
    
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    // Supprimer le cookie aussi
    document.cookie = "az_admin_verified=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
    router.push("/");
  };

  // Chargement initial
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-cyan-500 mx-auto mb-4" />
          <p className="text-gray-500">Vérification de la session...</p>
        </div>
      </div>
    );
  }

  // Page de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl mb-4 shadow-lg shadow-cyan-500/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Administration</h1>
            <p className="text-gray-400 mt-2">AZ Construction</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Mot de passe administrateur
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400 text-center">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Vérification...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Se connecter
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Accès réservé aux administrateurs
          </p>
        </div>
      </div>
    );
  }

  // Utilisateur authentifié - afficher le contenu admin
  return (
    <AdminLogoutContext.Provider value={{ handleLogout }}>
      {children}
    </AdminLogoutContext.Provider>
  );
}

// Context pour le bouton de déconnexion
interface AdminLogoutContextType {
  handleLogout: () => void;
}

const AdminLogoutContext = React.createContext<AdminLogoutContextType | null>(null);

export function useAdminLogout() {
  const context = React.useContext(AdminLogoutContext);
  if (!context) {
    throw new Error("useAdminLogout must be used within AuthGuard");
  }
  return context;
}
