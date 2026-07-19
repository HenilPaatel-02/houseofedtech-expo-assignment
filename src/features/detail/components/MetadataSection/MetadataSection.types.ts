import { Movie } from "../../../../types/movie.types";

export interface MetadataSectionProps {
  movie: Movie;
  quality?: "HD" | "4K";
}
