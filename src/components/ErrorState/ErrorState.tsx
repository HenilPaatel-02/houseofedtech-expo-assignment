import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AlertCircle } from "lucide-react-native";
import { COLORS } from "../../theme/colors";
import { SPACING } from "../../constants/spacing";
import { RADIUS } from "../../constants/radius";
import { ICON_SIZE_LG } from "../../constants/sizes";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: COLORS.background, padding: SPACING.xl }}
    >
      <AlertCircle size={ICON_SIZE_LG} color={COLORS.error} />

      <Text
        style={{
          color: COLORS.textPrimary,
          fontSize: 16,
          fontWeight: "600",
          marginTop: SPACING.md,
          textAlign: "center",
        }}
      >
        {message}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          fontSize: 13,
          marginTop: SPACING.xs,
          textAlign: "center",
        }}
      >
        Please check your connection and try again.
      </Text>

      <TouchableOpacity
        onPress={onRetry}
        style={{
          marginTop: SPACING.lg,
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.xl,
          borderRadius: RADIUS.md,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text style={{ color: COLORS.textPrimary, fontWeight: "600" }}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
}