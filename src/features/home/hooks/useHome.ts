import { useEffect, useState, useCallback } from "react";
import { HomeService } from "../services/home.service";
import { Movie } from "../../../types/movie.types";
import { ContinueWatchingMovie } from "../data/continueWatching.mock";

export function useHome() {
  const [featured, setFeatured] = useState<Movie | null>(null);
  const [trending, setTrending] = useState<Movie[]>([]);
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const [continueWatching, setContinueWatching] = useState<
    ContinueWatchingMovie[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        featuredData,
        trendingData,
        recommendedData,
        continueWatchingData,
      ] = await Promise.all([
        HomeService.getFeaturedMovie(),
        HomeService.getTrendingMovies(),
        HomeService.getRecommendedMovies(),
        HomeService.getContinueWatching(),
      ]);

      setFeatured(featuredData);
      setTrending(trendingData);
      setRecommended(recommendedData);
      setContinueWatching(continueWatchingData);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    featured,
    trending,
    recommended,
    continueWatching,
    loading,
    error,
    refresh: load,
  };
}
