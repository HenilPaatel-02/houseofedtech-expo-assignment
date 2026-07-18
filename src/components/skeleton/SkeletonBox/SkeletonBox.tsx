import React, { memo, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "react-native-paper";
import { SkeletonBoxProps } from "./SkeletonBox.types";
import { styles } from "./SkeletonBox.styles";
function SkeletonBox({
  width,
  height,
  borderRadius = 8,
  style,
}: SkeletonBoxProps) {
  const theme = useTheme();
  const opacity = useRef(new Animated.Value(0.4)).current;
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => {
      animation.stop();
    };
  }, [opacity]);
  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius,
          opacity,
          backgroundColor: theme.dark ? "#2A2A2A" : "#E5E7EB",
        },
        style,
      ]}
    />
  );
}
export default memo(SkeletonBox);
