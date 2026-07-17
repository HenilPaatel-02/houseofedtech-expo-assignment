import { Movie } from "../../types/movie.types";

export interface MovieCardProps {
  movie: Movie;

  onPress?: (movie: Movie) => void;
}
