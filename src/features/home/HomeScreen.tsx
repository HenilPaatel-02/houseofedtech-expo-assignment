import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import SectionHeader from "./components/SectionHeader";
import MovieCard from "./components/MovieCard";

import { movies } from "./data/movies.mock";

import HeroBanner from "./components/HeroBanner";
import { featuredMovie } from "./data/featured.mock";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <HeroBanner movie={featuredMovie} />
        <SectionHeader title="Trending" />
        <MovieCard movie={movies[0]} />
        <SectionHeader title="Recommended" />
        <MovieCard movie={movies[0]} />
        <SectionHeader title="Continue Watching" />
        <MovieCard movie={movies[0]} />
      </ScrollView>
    </SafeAreaView>
  );
}
