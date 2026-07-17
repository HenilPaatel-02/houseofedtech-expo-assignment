import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import SectionHeader from "./components/SectionHeader";
import MovieCard from "./components/MovieCard";

import { movies } from "./data/movies.mock";

import HeroBanner from "./components/HeroBanner";
import { featuredMovie } from "./data/featured.mock";
import ContentCarousel from "./components/ContentCarousel";
import { trendingMovies } from "./data/trending.mock";
import { recommendedMovies } from "./data/recommended.mock";
import { continueWatchingMovies } from "./data/continueWatching.mock";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <HeroBanner movie={featuredMovie} />
        <SectionHeader title="Trending" />
        <ContentCarousel title="Trending" data={trendingMovies} />
        <MovieCard movie={movies[0]} />
        <SectionHeader title="Recommended" />
        <ContentCarousel title="Recommended" data={recommendedMovies} />
        <MovieCard movie={movies[0]} />
        <SectionHeader title="Continue Watching" />
        <ContentCarousel
          title="Continue Watching"
          data={continueWatchingMovies}
        />
        <MovieCard movie={movies[0]} />
      </ScrollView>
    </SafeAreaView>
  );
}
