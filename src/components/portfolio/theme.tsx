"use client";

import { createContext, useContext, type ReactNode } from "react";

export type Theme = "dark" | "light";
const ThemeContext = createContext<Theme>("dark");

export function ThemeProvider({ value, children }: { value: Theme; children: ReactNode }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function usePortfolioTheme() {
  return useContext(ThemeContext);
}
