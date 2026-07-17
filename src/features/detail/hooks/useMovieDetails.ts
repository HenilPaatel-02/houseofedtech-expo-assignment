import { useCallback, useEffect, useState } from "react";
import { DetailService } from "../services/detail.service";
import { Movie} from "../../../types/movie.types";
export function useMovieDetails(movieId: string) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadMovieDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [movieData, relatedData] = await Promise.all([
        DetailService.getMovieById(movieId),
        DetailService.getRelatedMovies(movieId),
      ]);
      if (!movieData) {
        setError("Movie not found");
        return;
      }
      setMovie(movieData);
      setRelatedMovies(relatedData);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [movieId]);
  useEffect(() => {
    loadMovieDetails();
  }, [loadMovieDetails]);
  return { movie, relatedMovies, loading, error, refresh: loadMovieDetails };
}
