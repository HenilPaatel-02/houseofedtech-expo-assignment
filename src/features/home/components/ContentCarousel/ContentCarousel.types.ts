import { Movie } from "../../types/movie.types";

export interface ContentCarouselProps {
  title: string;

  data: Movie[];

  onPressMovie?: (movie: Movie) => void;

  onPressSeeAll?: () => void;

  showSeeAll?: boolean;
}
