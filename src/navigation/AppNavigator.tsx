import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import RootStack from "./RootStack";
import { useAppTheme } from "../theme";

export default function AppNavigator() {
  const { isDark } = useAppTheme();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
}
