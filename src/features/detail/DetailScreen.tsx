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

  const onRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  if (loading) {
    return <DetailSkeleton />;
  }
  if (error) {
    return <ErrorState message={error} onRetry={refresh} />;
  }

  if (!movie) {
    return <EmptyState title="Movie Not Found" />;
  }
  const handleBack = () => {
    navigation.goBack();
  };
  const handlePlay = () => {
    console.log("Play");
  };
  const handleAddToList = () => {
    console.log("Add To List");
  };
  const handleFavourite = () => {
    console.log("Favourite");
  };
  const handleShare = () => {
    console.log("Share");
  };
  const handleRelatedMoviePress = (selectedMovie: typeof movie) => {
    navigation.push("Detail", {
      id: movie.id,
    });
  };

  //   navigation.navigate("Detail", {
  //   id: movie.id,
  // });

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
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        <DetailHeroBanner
          movie={movie}
          onPlay={handlePlay}
          onAddToList={handleAddToList}
        />
        <MetadataSection movie={movie} quality="4K" />
        <ActionButtons
          onPlay={handlePlay}
          onAddToList={handleAddToList}
          onFavourite={handleFavourite}
          onShare={handleShare}
        />
        <DescriptionSection description={movie.description} />
        <RelatedMoviesSection
          movies={relatedMovies}
          onMoviePress={handleRelatedMoviePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
