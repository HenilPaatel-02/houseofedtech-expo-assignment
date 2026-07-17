import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "./components/ProfileHeader";
import SettingsItem from "./components/SettingsItem";

import SettingsSection from "./components/SettingsSection";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader
        name="Henil Patel"
        role="React Native Developer"
        email="henil@example.com"
        onEditProfile={() => console.log("Edit Profile")}
      />
      <SettingsSection title="General">
        <SettingsItem
          title="Appearance"
          leftIcon="theme-light-dark"
          onPress={() => {}}
        />
        <SettingsItem
          title="Notifications"
          leftIcon="bell-outline"
          showSwitch
          switchValue={true}
          onSwitchChange={() => {}}
        />
        <SettingsItem
          title="Downloads"
          leftIcon="download-outline"
          onPress={() => {}}
        />
      </SettingsSection>
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
      <SettingsSection title="Support">
        
        <SettingsItem
          title="Help Center"
          leftIcon="help-circle-outline"
          onPress={() => {}}
        />
        <SettingsItem
          title="Privacy Policy"
          leftIcon="shield-lock-outline"
          onPress={() => {}}
        />
        <SettingsItem
          title="Rate App"
          leftIcon="star-outline"
          onPress={() => {}}
        />
      </SettingsSection>
    </SafeAreaView>
  );
}
