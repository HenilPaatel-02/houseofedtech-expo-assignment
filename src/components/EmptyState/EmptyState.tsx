import React from "react";
import { View, Text } from "react-native";
import { Inbox } from "lucide-react-native";
import { COLORS } from "../../theme/colors";
import { SPACING } from "../../constants/spacing";
import { ICON_SIZE_LG } from "../../constants/sizes";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

export default function EmptyState({
  title = "Nothing here yet",
  subtitle = "Check back later for new content.",
}: EmptyStateProps) {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: COLORS.background, padding: SPACING.xl }}
    >
      <Inbox size={ICON_SIZE_LG} color={COLORS.textMuted} />

      <Text
        style={{
          color: COLORS.textPrimary,
          fontSize: 16,
          fontWeight: "600",
          marginTop: SPACING.md,
          textAlign: "center",
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          fontSize: 13,
          marginTop: SPACING.xs,
          textAlign: "center",
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
