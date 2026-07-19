import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../features/home/HomeScreen";
import ProfileScreen from "../features/profile/ProfileScreen";

import { BottomTabParamList } from "./navigation.types";

import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, useAppTheme } from "../theme";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  const { isDark } = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: isDark ? "#6B7280" : "#9CA3AF",
        tabBarStyle: {
          backgroundColor: isDark ? "rgba(15, 15, 15, 0.96)" : COLORS.surface,
          borderTopWidth: 0,
          elevation: 0,
          height: 64,
          paddingTop: 6,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "home" : "home-filled"}
              color={color}
              size={focused ? 26 : 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? 26 : 24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
