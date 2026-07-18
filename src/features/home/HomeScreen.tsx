import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import HeroBanner from "./components/HeroBanner";
import ContentCarousel from "./components/ContentCarousel";

import Loader from "../../components/Loader/Loader";
import ErrorState from "../../components/ErrorState/ErrorState";
import EmptyState from "../../components/EmptyState/EmptyState";

import { useHome } from "./hooks/useHome";
import { Movie } from "../../types/movie.types";
import { RootStackParamList } from "../../navigation/navigation.types";
import { useTheme } from "react-native-paper";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const theme = useTheme();
  const {
    featured,
    trending,
    recommended,
    continueWatching,
    loading,
    error,
    refresh,
  } = useHome();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  }, [refresh]);

  const handleMoviePress = useCallback(
    (movie: Movie) => {
      navigation.navigate("Detail", {
        id: movie.id,
      });
    },
    [navigation],
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={refresh} />;
  }

  if (featured == null && trending.length === 0) {
    return <EmptyState title="No Content Found" />;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={["top"]}
    >
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {featured && (
          <HeroBanner
            movie={featured}
            onPlay={handleMoviePress}
            onAddToList={() => {}}
          />
        )}

        <ContentCarousel
          title="Trending"
          data={trending}
          onPressMovie={handleMoviePress}
        />

        <ContentCarousel
          title="Recommended"
          data={recommended}
          onPressMovie={handleMoviePress}
        />

        <ContentCarousel
          title="Continue Watching"
          data={continueWatching}
          onPressMovie={handleMoviePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
