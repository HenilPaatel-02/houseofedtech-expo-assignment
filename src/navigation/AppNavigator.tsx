import React from "react";
import RootStack from "./RootStack";
import { useAppTheme } from "../theme";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";

export default function AppNavigator() {
  const { isDark } = useAppTheme();
  return (
    <NavigationContainer
      theme={isDark ? NavigationDarkTheme : NavigationLightTheme}
    >
      <RootStack />
    </NavigationContainer>
  );
}
