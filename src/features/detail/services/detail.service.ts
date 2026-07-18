import { delay } from "../../../services/delay";

import { movies } from "../../home/data/movies.mock";

export const DetailService = {
  async getMovieById(id: string) {
    await delay(1000);

    return movies.find((movie) => movie.id === id) ?? null;
  },

  async getRelatedMovies(movieId: string) {
    await delay(700);

    return movies.filter((movie) => movie.id !== movieId).slice(0, 6);
  },
};
