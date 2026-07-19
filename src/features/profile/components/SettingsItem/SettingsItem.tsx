import React, { memo } from "react";
import { Switch } from "react-native";
import { List, useTheme } from "react-native-paper";
import { SettingsItemProps } from "./SettingsItem.types";
import { styles } from "./SettingsItem.styles";
function SettingsItem({
  title,
  subtitle,
  leftIcon,
  rightIcon = "chevron-right",
  onPress,
  showSwitch = false,
  switchValue = false,
  onSwitchChange,
  disabled = false,
  rightComponent,
}: SettingsItemProps) {
  const theme = useTheme();
  return (
    <List.Item
      style={styles.container}
      title={title}
      description={subtitle}
      disabled={disabled}
      onPress={showSwitch ? undefined : onPress}
      titleStyle={{ color: theme.colors.onSurface }}
      descriptionStyle={{ color: theme.colors.onSurfaceVariant }}
      left={(props) => <List.Icon {...props} icon={leftIcon} />}
      right={(props) => {
        if (rightComponent) {
          return rightComponent;
        }
        if (showSwitch) {
          return <Switch value={switchValue} onValueChange={onSwitchChange} />;
        }
        return <List.Icon {...props} icon={rightIcon} />;
      }}
    />
  );
}
export default memo(SettingsItem);
