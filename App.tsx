import "react-native-gesture-handler";
import "./global.css";

import React from "react";

import AppNavigator from "./src/navigation/AppNavigator";

import { ThemeProvider } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
