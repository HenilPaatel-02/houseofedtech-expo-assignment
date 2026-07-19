import { delay } from "../../../services/delay";

import { featuredMovie } from "../data/featured.mock";

import { trendingMovies } from "../data/trending.mock";

import { recommendedMovies } from "../data/recommended.mock";

import { continueWatchingMovies } from "../data/continueWatching.mock";

export const HomeService = {
  async getFeaturedMovie() {
    await delay(800);

    return featuredMovie;
  },

  async getTrendingMovies() {
    await delay(1200);

    return trendingMovies;
  },

  async getRecommendedMovies() {
    await delay(1500);

    return recommendedMovies;
  },

  async getContinueWatching() {
    await delay(1000);

    return continueWatchingMovies;
  },
};
