import { Movie } from "../../../types/movie.types";

export const recommendedMovies: Movie[] = [
  {
    id: "4",
    title: "Oppenheimer",
    description: "The story of the atomic bomb's creation.",

    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",

    genre: ["Drama"],

    rating: 4.9,

    duration: "3h 0m",

    year: 2023,

    featured: false,
  },

  {
    id: "5",
    title: "Blade Runner 2049",

    description: "A new blade runner unearths a long-buried secret.",

    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",

    genre: ["Sci-Fi"],

    rating: 4.6,

    duration: "2h 44m",

    year: 2017,

    featured: false,
  },
];
