import React, { useCallback, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "./components/ProfileHeader";
import SettingsSection from "./components/SettingsSection";
import SettingsItem from "./components/SettingsItem";
import AppVersion from "./components/AppVersion";
import ErrorState from "../../components/ErrorState/ErrorState";
import EmptyState from "../../components/EmptyState/EmptyState";
import { useProfile } from "./hooks/useProfile";
import { useAppTheme } from "../../theme";
import { useTheme } from "react-native-paper";
import ProfileSkeleton from "../../components/skeleton/ProfileSkeleton";
export default function ProfileScreen() {
  const theme = useTheme();
  const { profile, loading, error, refresh } = useProfile();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const { mode, setMode } = useAppTheme();
  const onRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  const handleEditProfile = () => {
    console.log("Edit Profile");
  };
  const handleAppearance = () => {
    console.log("Appearance");
  };
  const handleDownloads = () => {
    console.log("Downloads");
  };
  const handleHelp = () => {
    console.log("Help Center");
  };
  const handlePrivacy = () => {
    console.log("Privacy Policy");
  };
  const handleRateApp = () => {
    console.log("Rate App");
  };
  const handleAbout = () => {
    console.log("About");
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={refresh} />;
  }

  if (!profile) {
    return <EmptyState title="Profile Not Found" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        <ProfileHeader
          name={profile.name}
          email={profile.email}
          role={profile.role}
          avatar={profile.avatar}
          onEditProfile={handleEditProfile}
        />
        <SettingsSection title="General">
          <SettingsItem
            title="Dark Mode"
            subtitle="Switch app appearance"
            leftIcon="theme-light-dark"
            showSwitch
            switchValue={mode === "dark"}
            onSwitchChange={(enabled) => {
              setMode(enabled ? "dark" : "light");
            }}
          />
          <SettingsItem
            title="Notifications"
            subtitle="Enable push notifications"
            leftIcon="bell-outline"
            showSwitch
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
          />
          <SettingsItem
            title="Downloads"
            subtitle="Manage offline content"
            leftIcon="download-outline"
            onPress={handleDownloads}
          />
        </SettingsSection>
        <SettingsSection title="Support">
          <SettingsItem
            title="Help Center"
            leftIcon="help-circle-outline"
            onPress={handleHelp}
          />
          <SettingsItem
            title="Privacy Policy"
            leftIcon="shield-lock-outline"
            onPress={handlePrivacy}
          />
          <SettingsItem
            title="Rate App"
            leftIcon="star-outline"
            onPress={handleRateApp}
          />
          <SettingsItem
            title="About"
            leftIcon="information-outline"
            onPress={handleAbout}
          />
        </SettingsSection>
        <AppVersion
          appName="House of EdTech Assignment"
          version="1.0.0"
          buildNumber="1"
          copyright="© 2026 Henil Patel"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
