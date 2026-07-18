import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import SkeletonBox from "../SkeletonBox";
import { styles } from "./DetailSkeleton.styles";
import { SafeAreaView } from "react-native-safe-area-context";

import DetailHeader from "../../../features/detail/components/DetailHeader";

function DetailSkeleton() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <DetailHeader
        title=""
        showTitle={false}
        onBack={() => {}}
        onFavourite={() => {}}
        onShare={() => {}}
      />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <SkeletonBox width="100%" height={420} borderRadius={0} />
          <View style={styles.content}>
            <SkeletonBox width="65%" height={34} />

            <View style={styles.metadataRow}>
              <SkeletonBox width={70} height={18} />
              <SkeletonBox width={70} height={18} />
              <SkeletonBox width={70} height={18} />
            </View>

            <SkeletonBox width="100%" height={48} borderRadius={12} />

            <View style={styles.buttonRow}>
              <SkeletonBox width={100} height={42} />
              <SkeletonBox width={100} height={42} />
              <SkeletonBox width={100} height={42} />
            </View>
            <SkeletonBox width="45%" height={24} />
            <SkeletonBox width="100%" height={16} style={{ marginTop: 20 }} />
            <SkeletonBox width="95%" height={16} style={{ marginTop: 12 }} />
            <SkeletonBox width="80%" height={16} style={{ marginTop: 12 }} />

            <View style={styles.relatedSection}>
              <SkeletonBox width={170} height={24} />
              <View style={styles.cardRow}>
                <SkeletonBox width={110} height={170} />
                <SkeletonBox width={110} height={170} />
                <SkeletonBox width={110} height={170} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default memo(DetailSkeleton);
