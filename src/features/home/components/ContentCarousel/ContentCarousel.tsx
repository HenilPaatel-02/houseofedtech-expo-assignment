import React, { memo, useCallback } from "react";

import { FlatList, ListRenderItem, View } from "react-native";

import MovieCard from "../MovieCard";
import SectionHeader from "../SectionHeader";

import { Movie } from "../../../../types/movie.types";
import { ContentCarouselProps } from "./ContentCarousel.types";

import { styles } from "./ContentCarousel.styles";

function ContentCarousel({
  title,
  data,
  onPressMovie,
  onPressSeeAll,
  showSeeAll = true,
}: ContentCarouselProps) {
  const renderItem: ListRenderItem<Movie> = useCallback(
    ({ item }) => <MovieCard movie={item} onPress={onPressMovie} />,
    [onPressMovie],
  );
  const keyExtractor = useCallback((item: Movie) => item.id, []);

  return (
    <View style={styles.container}>
      <SectionHeader
        title={title}
        showSeeAll={showSeeAll}
        onPressAction={onPressSeeAll}
      />

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
        removeClippedSubviews
        updateCellsBatchingPeriod={50}
      />
    </View>
  );
}

export default memo(ContentCarousel);
