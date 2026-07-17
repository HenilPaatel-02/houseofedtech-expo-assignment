import { Movie } from "../../types/movie.types";

export interface HeroBannerProps {
  movie: Movie;
  onPlay?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}
