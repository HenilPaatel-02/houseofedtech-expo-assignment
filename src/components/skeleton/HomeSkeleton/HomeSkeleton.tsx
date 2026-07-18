import React, { memo } from "react";

import { ScrollView, View } from "react-native";

import { useTheme } from "react-native-paper";

import SkeletonBox from "../SkeletonBox";

import { styles } from "./HomeSkeleton.styles";

function HomeSkeleton() {
  const theme = useTheme();

  const renderSection = (key: number) => (
    <View key={key} style={styles.section}>
      <SkeletonBox width={180} height={24} style={styles.title} />

      <View style={styles.cardsRow}>
        <SkeletonBox width={110} height={170} />

        <SkeletonBox width={110} height={170} />

        <SkeletonBox width={110} height={170} />
      </View>
    </View>
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <SkeletonBox
          width="100%"
          height={220}
          borderRadius={16}
          style={styles.hero}
        />

        {[1, 2, 3].map(renderSection)}
      </View>
    </ScrollView>
  );
}

export default memo(HomeSkeleton);
