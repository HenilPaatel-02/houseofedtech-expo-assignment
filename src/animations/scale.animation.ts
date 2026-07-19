import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
export function usePressScale() {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const pressIn = () => {
    scale.value = withSpring(0.96, { damping: 18, stiffness: 300 });
  };
  const pressOut = () => {
    scale.value = withSpring(1, { damping: 18, stiffness: 300 });
  };
  return { animatedStyle, pressIn, pressOut };
}
