import { Movie } from "../../../../types/movie.types";

export interface RelatedMoviesSectionProps {
  movies: Movie[];
  onMoviePress?: (movie: Movie) => void;
  onSeeAll?: () => void;
}
