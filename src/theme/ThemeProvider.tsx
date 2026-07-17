import React, { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

import { PaperProvider } from "react-native-paper";

import { darkTheme, lightTheme } from "./paperTheme";

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      {children}
    </PaperProvider>
  );
}
