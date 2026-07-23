"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PortalMode } from "@/types";

const STORAGE_KEY = "artability-portal-mode";

interface PortalModeContextValue {
  mode: PortalMode | null;
  hasChosen: boolean;
  ready: boolean;
  setMode: (mode: PortalMode) => void;
  clearMode: () => void;
  isStudent: boolean;
  isBuyer: boolean;
  label: string;
  canAccessLearn: boolean;
}

const PortalModeContext = createContext<PortalModeContextValue | null>(null);

const modeLabels: Record<PortalMode, string> = {
  student: "Artist / Parent Portal",
  buyer: "Buyer / CSR Mode",
};

export function PortalModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PortalMode | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "student" || stored === "buyer") {
        setModeState(stored);
      }
    } catch {
      // Ignore storage errors in private mode.
    }
    setReady(true);
  }, []);

  const setMode = useCallback((next: PortalMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors.
    }
  }, []);

  const clearMode = useCallback(() => {
    setModeState(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors.
    }
  }, []);

  const value = useMemo(
    () => ({
      mode,
      hasChosen: mode !== null,
      ready,
      setMode,
      clearMode,
      isStudent: mode === "student",
      isBuyer: mode === "buyer",
      label: mode ? modeLabels[mode] : "Choose identity",
      canAccessLearn: mode !== "buyer",
    }),
    [clearMode, mode, ready, setMode],
  );

  return (
    <PortalModeContext.Provider value={value}>
      {children}
    </PortalModeContext.Provider>
  );
}

export function usePortalMode() {
  const context = useContext(PortalModeContext);
  if (!context) {
    throw new Error("usePortalMode must be used within PortalModeProvider");
  }
  return context;
}
