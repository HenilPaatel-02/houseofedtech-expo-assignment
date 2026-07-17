// src/theme/paperTheme.ts

import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

import { DarkColors, LightColors } from "./colors";

export const lightTheme = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,

    primary: LightColors.primary,
    background: LightColors.background,
    surface: LightColors.surface,

    onSurface: LightColors.text,
    outline: LightColors.border,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,

  colors: {
    ...MD3DarkTheme.colors,

    primary: DarkColors.primary,
    background: DarkColors.background,
    surface: DarkColors.surface,

    onSurface: DarkColors.text,
    outline: DarkColors.border,
  },
};
