import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import SkeletonBox from "../SkeletonBox";
import { styles } from "./DetailSkeleton.styles";
function DetailSkeleton() {
  const theme = useTheme();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      showsVerticalScrollIndicator={false}
    >
      theme.colors.surface
      <View style={styles.container}>
        theme.colors.surface
        {/* Hero Banner */}theme.colors.surface
        <SkeletonBox width="100%" height={340} borderRadius={0} />
        theme.colors.surface
        <View style={styles.content}>
          theme.colors.surface
          {/* Movie Title */} <SkeletonBox width="70%" height={34} />
          theme.colors.surface
          {/* Metadata */}theme.colors.surface
          <View style={styles.metadataRow}>
            theme.colors.surface
            <SkeletonBox width={70} height={18} />
            theme.colors.surface
            <SkeletonBox width={70} height={18} />
            theme.colors.surface
            <SkeletonBox width={70} height={18} />
            theme.colors.surface
          </View>
          theme.colors.surface
          {/* Play Button */}theme.colors.surface
          <SkeletonBox width="100%" height={48} borderRadius={12} />
          theme.colors.surface
          {/* Action Buttons */}theme.colors.surface
          <View style={styles.buttonRow}>
            theme.colors.surface
            <SkeletonBox width={100} height={42} />
            theme.colors.surface
            <SkeletonBox width={100} height={42} />
            theme.colors.surface
            <SkeletonBox width={100} height={42} />
            theme.colors.surface
          </View>
          theme.colors.surface
          {/* Description */} <SkeletonBox width="45%" height={24} />
          theme.colors.surface
          <SkeletonBox width="100%" height={16} style={{ marginTop: 20 }} />
          theme.colors.surface
          <SkeletonBox width="95%" height={16} style={{ marginTop: 12 }} />
          theme.colors.surface
          <SkeletonBox width="80%" height={16} style={{ marginTop: 12 }} />
          theme.colors.surface
          {/* Related Movies */}theme.colors.surface
          <View style={styles.relatedSection}>
            theme.colors.surface
            <SkeletonBox width={170} height={24} />
            theme.colors.surface
            <View style={styles.cardRow}>
              theme.colors.surface
              <SkeletonBox width={110} height={170} />
              theme.colors.surface
              <SkeletonBox width={110} height={170} />
              theme.colors.surface
              <SkeletonBox width={110} height={170} />
              theme.colors.surface
            </View>
            theme.colors.surface
          </View>
          theme.colors.surface
        </View>
        theme.colors.surface
      </View>
      theme.colors.surface
    </ScrollView>
  );
}
export default memo(DetailSkeleton);
