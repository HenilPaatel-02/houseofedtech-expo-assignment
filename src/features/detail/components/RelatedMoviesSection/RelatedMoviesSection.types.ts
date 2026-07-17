import { Movie } from "../../../home/types/movie.types";
import { MovieDetail } from "../../types/detail.types";
export interface RelatedMoviesSectionProps {
  movies: Movie[];
  onMoviePress?: (movie: Movie) => void;
  onSeeAll?: () => void;
}
