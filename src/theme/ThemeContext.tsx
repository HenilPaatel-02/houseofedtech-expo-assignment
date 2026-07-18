import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "./themes";
type ThemeMode = "light" | "dark" | "system";
interface ThemeContextType {
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => Promise<void>;
}
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
const STORAGE_KEY = "@theme_mode";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>("system");
  useEffect(() => {
    loadTheme();
  }, []);
  async function loadTheme() {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if (saved) {
      setModeState(saved as ThemeMode);
    }
  }
  const isDark = mode === "system" ? systemTheme === "dark" : mode === "dark";
  async function setMode(value: ThemeMode) {
    setModeState(value);
    await AsyncStorage.setItem(STORAGE_KEY, value);
  }
  const value = useMemo(() => ({ mode, isDark, setMode }), [mode, isDark]);
  return (
    <ThemeContext.Provider value={value}>
      <PaperProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
export function useAppTheme() {
  return useContext(ThemeContext);
}
