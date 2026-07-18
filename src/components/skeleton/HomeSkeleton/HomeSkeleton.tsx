import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";

import SkeletonBox from "../SkeletonBox";
import { styles } from "./HomeSkeleton.styles";

function HomeSkeleton() {
  const theme = useTheme();

  const renderSection = (key: number) => (
    <View key={key} style={styles.section}>
      <SkeletonBox width={120} height={26} style={styles.title} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {[1, 2, 3, 4].map((item) => (
          <SkeletonBox
            key={item}
            width={150}
            height={225}
            borderRadius={12}
            style={styles.card}
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
      edges={["top"]}
    >
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
            height={420}
            borderRadius={0}
            style={styles.hero}
          />

          {[1, 2, 3].map(renderSection)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(HomeSkeleton);
