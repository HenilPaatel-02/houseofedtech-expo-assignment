import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import DetailScreen from "../features/detail/DetailScreen";

import { RootStackParamList } from "./navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 280,
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
        presentation: "card",
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ animation: "fade_from_bottom", animationDuration: 320 }}
      />
    </Stack.Navigator>
  );
}
