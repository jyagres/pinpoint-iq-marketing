"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import {
  AuthUser,
  clearAuth,
  getToken,
  getUser,
  saveAuth,
} from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

// ── Types ──────────────────────────────────────────────────────────────────

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
}

// ── Context ────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

// ── Provider ───────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    loading: true,
  });

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const token = getToken();
    const user = getUser();
    setState({ user, token, loading: false });
  }, []);

  const handleAuthResponse = useCallback(
    (data: { access_token: string; user: AuthUser }) => {
      saveAuth(data.access_token, data.user);
      setState({ user: data.user, token: data.access_token, loading: false });
      router.push("/dashboard");
    },
    [router]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail ?? "Login failed");
      }
      handleAuthResponse(await res.json());
    },
    [handleAuthResponse]
  );

  const register = useCallback(
    async (email: string, password: string, name?: string) => {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail ?? "Registration failed");
      }
      handleAuthResponse(await res.json());
    },
    [handleAuthResponse]
  );

  const logout = useCallback(() => {
    clearAuth();
    setState({ user: null, token: null, loading: false });
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
