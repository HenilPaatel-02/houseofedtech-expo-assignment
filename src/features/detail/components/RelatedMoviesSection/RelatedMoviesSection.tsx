import React, { memo } from "react";
import { View } from "react-native";
import ContentCarousel from "../../../home/components/ContentCarousel";
import { RelatedMoviesSectionProps } from "./RelatedMoviesSection.types";
import { styles } from "./RelatedMoviesSection.styles";
function RelatedMoviesSection({
  movies,
  onMoviePress,
  onSeeAll,
}: RelatedMoviesSectionProps) {
  if (movies.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      
      <ContentCarousel
        title="Related Movies"
        data={movies}
        onPressMovie={onMoviePress}
        onPressSeeAll={onSeeAll}
      />
    </View>
  );
}
export default memo(RelatedMoviesSection);
