import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./SectionHeader.styles";
import { SectionHeaderProps } from "./SectionHeader.types";
import { useTheme } from "react-native-paper";

function SectionHeader({
  title,
  showSeeAll = true,
  actionLabel = "See All",
  onPressAction,
}: SectionHeaderProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          variant="titleLarge"
          style={[styles.title, { color: theme.colors.onSurface }]}
        >
          {title}
        </Text>

        {showSeeAll && (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressAction}>
            <Text
              variant="labelLarge"
              style={[styles.actionText, { color: theme.colors.primary }]}
            >
              {actionLabel}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default memo(SectionHeader);
