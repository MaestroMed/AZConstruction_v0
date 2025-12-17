"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Eye, EyeOff } from "lucide-react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "AZAdmin2024!";
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
    const checkSession = () => {
      try {
        const session = localStorage.getItem(SESSION_KEY);
        if (session) {
          const { expiry, token } = JSON.parse(session);
          if (expiry > Date.now() && token === "admin_authenticated") {
            setIsAuthenticated(true);
            return;
          }
        }
      } catch (e) {
        console.error("Session check error:", e);
      }
      setIsAuthenticated(false);
    };
    
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simuler un délai pour éviter le brute force
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      const session = {
        token: "admin_authenticated",
        expiry: Date.now() + SESSION_DURATION,
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setIsAuthenticated(true);
    } else {
      setError("Mot de passe incorrect");
      setPassword("");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    router.push("/");
  };

  // Chargement initial
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Administration</h1>
            <p className="text-gray-400 mt-2">AZ Construction</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Mot de passe administrateur
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
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
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connexion...
                  </>
                ) : (
                  "Se connecter"
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
    <>
      {/* Bouton de déconnexion dans le header admin */}
      <AdminLogoutContext.Provider value={{ handleLogout }}>
        {children}
      </AdminLogoutContext.Provider>
    </>
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

