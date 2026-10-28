import React, { createContext, useContext, useEffect } from 'react';

export type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const lightThemeContext: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(lightThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      try {
        localStorage.removeItem('axent_brand_theme');
      } catch {}
    }
  }, []);

  return (
    <ThemeContext.Provider value={lightThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  return lightThemeContext;
}
