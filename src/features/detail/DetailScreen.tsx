import React, { useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import DetailHeader from "./components/DetailHeader";
import DetailHeroBanner from "./components/DetailHeroBanner";
import MetadataSection from "./components/MetadataSection";
import ActionButtons from "./components/ActionButtons";
import DescriptionSection from "./components/DescriptionSection";
import RelatedMoviesSection from "./components/RelatedMoviesSection";

import ErrorState from "../../components/ErrorState/ErrorState";
import EmptyState from "../../components/EmptyState/EmptyState";
import { useMovieDetails } from "./hooks/useMovieDetails";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation.types";
import { Movie } from "../../types/movie.types";
import { useTheme } from "react-native-paper";
import DetailSkeleton from "../../components/skeleton/DetailSkeleton";
import { useRefresh } from "../../hooks/useRefresh";
import Animated from "react-native-reanimated";
import { fadeSlide } from "../../animations";

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;
type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;

export default function DetailScreen() {
  const theme = useTheme();
  const navigation = useNavigation<DetailScreenNavigationProp>();

  const route = useRoute<DetailRouteProp>();
  const { id } = route.params;

  const { movie, relatedMovies, loading, error, refresh } = useMovieDetails(id);

  const { refreshing, onRefresh } = useRefresh(refresh);

  const handleBack = () => {
    navigation.goBack();
  };
  const handlePlay = useCallback(() => {}, []);

  const handleAddToList = useCallback(() => {}, []);

  const handleFavourite = useCallback(() => {}, []);

  const handleShare = useCallback(() => {}, []);
  const handleRelatedMoviePress = useCallback(
    (selectedMovie: Movie) => {
      navigation.push("Detail", { id: selectedMovie.id });
    },
    [navigation],
  );

  if (loading) {
    return <DetailSkeleton />;
  }
  if (error) {
    return <ErrorState message={error} onRetry={refresh} />;
  }

  if (!movie) {
    return <EmptyState title="Movie Not Found" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <DetailHeader
        title={movie.title}
        showTitle={false}
        onBack={handleBack}
        onFavourite={handleFavourite}
        onShare={handleShare}
      />
      <ScrollView
        style={{
          backgroundColor: theme.colors.background,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
            progressBackgroundColor={theme.colors.background}
            tintColor={theme.colors.primary}
          />
        }
      >
        <DetailHeroBanner
          movie={movie}
          onPlay={handlePlay}
          onAddToList={handleAddToList}
        />
        <Animated.View entering={fadeSlide(80)}>
          <MetadataSection movie={movie} quality="4K" />
        </Animated.View>

        <Animated.View entering={fadeSlide(140)}>
          <ActionButtons
            onPlay={handlePlay}
            onAddToList={handleAddToList}
            onFavourite={handleFavourite}
            onShare={handleShare}
          />
        </Animated.View>

        <Animated.View entering={fadeSlide(220)}>
          <DescriptionSection description={movie.description} />
        </Animated.View>
        <Animated.View entering={fadeSlide(300)}>
          <RelatedMoviesSection
            movies={relatedMovies}
            onMoviePress={handleRelatedMoviePress}
          />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
