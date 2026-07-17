import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import SectionHeader from "./components/SectionHeader";
import MovieCard from "./components/MovieCard";

import { movies } from "./data/movies.mock";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <SectionHeader title="Trending" />

        <SectionHeader title="Recommended" />

        <SectionHeader title="Continue Watching" />
      </ScrollView>

      <MovieCard movie={movies[0]} />
    </SafeAreaView>
  );
}
