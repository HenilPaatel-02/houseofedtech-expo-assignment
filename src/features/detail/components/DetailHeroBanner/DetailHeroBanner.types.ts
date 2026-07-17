import { Movie } from "../../../../types/movie.types";

export interface DetailHeroBannerProps {
  movie: Movie;
  onPlay?: () => void;
  onAddToList?: () => void;
}
