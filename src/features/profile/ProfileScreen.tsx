import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "./components/ProfileHeader";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <ProfileHeader
        name="Henil Patel"
        role="React Native Developer"
        email="henil@example.com"
        onEditProfile={() => console.log("Edit Profile")}
      />
    </SafeAreaView>
  );
}
