import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import SectionHeader from "./components/SectionHeader";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <SectionHeader title="Trending" />

        <SectionHeader title="Recommended" />

        <SectionHeader title="Continue Watching" />
      </ScrollView>
    </SafeAreaView>
  );
}
