import { FadeInUp } from "react-native-reanimated";
export const staggerFade = (index: number, duration = 350) =>
  FadeInUp.delay(index * 80).duration(duration);
