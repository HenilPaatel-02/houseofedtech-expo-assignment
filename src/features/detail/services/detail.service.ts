import { delay } from "../../../services/delay";

import { movieDetail } from "../data/detail.mock";
import { relatedMovies } from "../data/related.mock";

export const DetailService = {
  async getMovieById(id: string) {
    await delay(1000);

    if (movieDetail.id === id) {
      return movieDetail;
    }

    return null;
  },

  async getRelatedMovies(movieId: string) {
    await delay(700);

    return relatedMovies.filter((movie) => movie.id !== movieId);
  },
};
