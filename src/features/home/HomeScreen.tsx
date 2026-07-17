import React from "react";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation.types";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useHome } from "./hooks/useHome";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MainTabs">;

export default function HomeScreen() {

const {
featured,
trending,
recommended,
loading,
error,
refresh,
}=useHome();
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-xl">Home Screen</Text>
     
      <Button mode="contained">Start</Button>
    </View>
  );
}
