import React, { memo } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { usePressScale } from "../../../animations";
import { AnimatedButtonProps } from "./AnimatedButton.types";
function AnimatedButton({ children, onPress }: AnimatedButtonProps) {
  const { animatedStyle, pressIn, pressOut } = usePressScale();
  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
        {children}
      </Pressable>
    </Animated.View>
  );
}
export default memo(AnimatedButton);
