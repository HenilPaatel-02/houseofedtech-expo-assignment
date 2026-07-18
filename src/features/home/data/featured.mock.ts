import { movies } from "./movies.mock";

export const featuredMovie = movies.find((movie) => movie.featured)!;
