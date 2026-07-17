// src/features/home/components/SectionHeader/SectionHeader.tsx

import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./SectionHeader.styles";
import { SectionHeaderProps } from "./SectionHeader.types";

function SectionHeader({
  title,
  showSeeAll = true,
  onPressSeeAll,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>

        {showSeeAll && (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressSeeAll}>
            <Text variant="labelLarge" style={styles.seeAll}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default memo(SectionHeader);
