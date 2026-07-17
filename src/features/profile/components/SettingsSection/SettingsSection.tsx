import React, { memo } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { SettingsSectionProps } from "./SettingsSection.types";
import { styles } from "./SettingsSection.styles";
function SettingsSection({ title, children }: SettingsSectionProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      
      <Text
        variant="titleMedium"
        style={[styles.title, { color: theme.colors.primary }]}
      >
        
        {title}
      </Text>
      <View style={styles.content}> {children} </View>
    </View>
  );
}
export default memo(SettingsSection);
