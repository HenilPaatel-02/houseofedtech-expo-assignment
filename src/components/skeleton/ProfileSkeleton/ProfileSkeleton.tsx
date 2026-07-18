import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import SkeletonBox from "../SkeletonBox";
import { styles } from "./ProfileSkeleton.styles";
function ProfileSkeleton() {
  const theme = useTheme();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.header}>
          <SkeletonBox width={100} height={100} borderRadius={50} />
          <SkeletonBox width={180} height={28} style={{ marginTop: 20 }} />
          <SkeletonBox width={140} height={18} style={{ marginTop: 12 }} />
          <SkeletonBox width={220} height={18} style={{ marginTop: 12 }} />
          <SkeletonBox
            width={180}
            height={44}
            borderRadius={12}
            style={{ marginTop: 24 }}
          />
        </View>
        {/* General Section */}
        <View style={styles.section}>
          <SkeletonBox width={120} height={22} style={{ marginBottom: 16 }} />
          <SkeletonBox
            width="100%"
            height={60}
            borderRadius={12}
            style={styles.item}
          />
          <SkeletonBox
            width="100%"
            height={60}
            borderRadius={12}
            style={styles.item}
          />
          <SkeletonBox width="100%" height={60} borderRadius={12} />
        </View>
        {/* Support Section */}
        <View style={styles.section}>
          <SkeletonBox width={110} height={22} style={{ marginBottom: 16 }} />
          <SkeletonBox
            width="100%"
            height={60}
            borderRadius={12}
            style={styles.item}
          />
          <SkeletonBox
            width="100%"
            height={60}
            borderRadius={12}
            style={styles.item}
          />
          <SkeletonBox width="100%" height={60} borderRadius={12} />
        </View>
        {/* Footer */}
        <View style={{ alignItems: "center", marginTop: 12 }}>
          <SkeletonBox width={180} height={18} />
          <SkeletonBox width={140} height={16} style={{ marginTop: 12 }} />
        </View>
      </View>
    </ScrollView>
  );
}
export default memo(ProfileSkeleton);
