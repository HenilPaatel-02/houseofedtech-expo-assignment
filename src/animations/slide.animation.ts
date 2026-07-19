import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
export function useSlideUpAnimation(duration = 350, offset = 25) {
  const translateY = useSharedValue(offset);
  useEffect(() => {
    translateY.value = withTiming(0, { duration });
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return animatedStyle;
}
