import { Movie } from "../../../types/movie.types";

export interface ContinueWatchingMovie extends Movie {
  progress: number; // 0 to 1, e.g. 0.35 = 35% watched
}

export const continueWatchingMovies: ContinueWatchingMovie[] = [
  {
    id: "6",
    title: "The Batman",
    description: "Batman ventures into Gotham's underworld.",

    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",

    genre: ["Action"],

    rating: 4.4,

    duration: "2h 56m",

    year: 2022,

    featured: false,

    progress: 0.42,
  },

  {
    id: "7",
    title: "Everything Everywhere All at Once",

    description:
      "A woman must connect with parallel universe versions of herself.",

    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",

    genre:[ "Sci-Fi"],

    rating: 4.7,

    duration: "2h 19m",

    year: 2022,

    featured: false,

    progress: 0.78,
  },
];
