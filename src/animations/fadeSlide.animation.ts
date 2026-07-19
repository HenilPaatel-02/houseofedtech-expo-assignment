import { FadeInUp } from "react-native-reanimated";

export const fadeSlide = (delay = 0, duration = 350) =>
  FadeInUp.delay(delay).duration(duration);
