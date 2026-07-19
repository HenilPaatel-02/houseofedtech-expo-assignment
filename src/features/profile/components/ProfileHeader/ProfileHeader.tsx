import React, { memo } from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { Avatar, Button, Text, useTheme } from "react-native-paper";
import { ProfileHeaderProps } from "./ProfileHeader.types";
import { styles } from "./ProfileHeader.styles";
function ProfileHeader({
  name,
  email,
  role,
  avatar,
  onEditProfile,
}: ProfileHeaderProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      
      {avatar ? (
        <Image
          source={avatar}
          style={styles.avatar}
          contentFit="cover"
          transition={300}
        />
      ) : (
        <Avatar.Icon size={100} icon="account" />
      )}
      <Text
        variant="headlineSmall"
        style={[styles.name, { color: theme.colors.onSurface }]}
      >
        
        {name}
      </Text>
      <Text
        variant="titleMedium"
        style={[styles.role, { color: theme.colors.onSurfaceVariant }]}
      >
        
        {role}
      </Text>
      <Text
        variant="bodyMedium"
        style={[styles.email, { color: theme.colors.onSurfaceVariant }]}
      >
        
        {email}
      </Text>
      <Button
        mode="contained"
        icon="account-edit"
        style={styles.button}
        onPress={onEditProfile}
      >
        
        Edit Profile
      </Button>
    </View>
  );
}
export default memo(ProfileHeader);
