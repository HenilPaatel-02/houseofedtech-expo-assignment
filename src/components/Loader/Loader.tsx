import React from "react";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../../theme/colors";
import { SPACING } from "../../constants/spacing";
import { RADIUS } from "../../constants/radius";
import { CARD_WIDTH, CARD_HEIGHT, HERO_HEIGHT } from "../../constants/sizes";

interface LoaderProps {
  variant?: "fullscreen" | "skeleton";
}

export default function Loader({ variant = "skeleton" }: LoaderProps) {
  if (variant === "fullscreen") {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: COLORS.background, paddingTop: SPACING.lg }}>
      {/* Hero skeleton */}
      <View
        style={{
          height: HERO_HEIGHT,
          borderRadius: RADIUS.lg,
          backgroundColor: COLORS.surface,
          marginHorizontal: SPACING.lg,
          marginBottom: SPACING.xl,
        }}
      />

      {/* Row skeleton */}
      <View style={{ flexDirection: "row", paddingHorizontal: SPACING.lg }}>
        {[1, 2, 3].map((i) => (
          <View
            key={i}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: RADIUS.md,
              backgroundColor: COLORS.surface,
              marginRight: SPACING.md,
            }}
          />
        ))}
      </View>
    </View>
  );
}