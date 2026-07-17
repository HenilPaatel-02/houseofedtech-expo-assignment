import React, { memo } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { AppVersionProps } from "./AppVersion.types";
import { styles } from "./AppVersion.styles";
function AppVersion({
  appName,
  version,
  buildNumber,
  copyright,
}: AppVersionProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      
      <Text
        variant="titleMedium"
        style={[styles.appName, { color: theme.colors.onSurface }]}
      >
        
        {appName}
      </Text>
      <Text
        variant="bodyMedium"
        style={[styles.version, { color: theme.colors.onSurfaceVariant }]}
      >
        
        Version {version} {buildNumber ? ` (Build ${buildNumber})` : ""}
      </Text>
      {copyright && (
        <Text
          variant="bodySmall"
          style={[styles.copyright, { color: theme.colors.onSurfaceVariant }]}
        >
          
          {copyright}
        </Text>
      )}
    </View>
  );
}
export default memo(AppVersion);
