import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "./components/ProfileHeader";
import SettingsItem from "./components/SettingsItem";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader
        name="Henil Patel"
        role="React Native Developer"
        email="henil@example.com"
        onEditProfile={() => console.log("Edit Profile")}
      />
      <SettingsItem
        title="Appearance"
        subtitle="Light / Dark Mode"
        leftIcon="theme-light-dark"
        onPress={() => console.log("Appearance")}
      />
      <SettingsItem
        title="Notifications"
        leftIcon="bell-outline"
        showSwitch
        switchValue={true}
        onSwitchChange={(value) => console.log(value)}
      />
      <SettingsItem
        title="About"
        leftIcon="information-outline"
        onPress={() => console.log("About")}
      />
    </SafeAreaView>
  );
}
