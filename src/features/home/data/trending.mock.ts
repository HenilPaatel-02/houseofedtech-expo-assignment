import { Movie } from "../../../types/movie.types";

export const trendingMovies: Movie[] = [
  {
    id: "2",
    title: "Avatar",
    description: "Epic fantasy world.",

    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",

    genre: ["Adventure"],

    rating: 4.5,

    duration: "2h 42m",

    year: 2022,

    featured: false,
  },

  {
    id: "3",
    title: "Dune",

    description: "Adventure on Arrakis.",

    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",

    genre: ["Sci-Fi"],

    rating: 4.7,

    duration: "2h 35m",

    year: 2021,

    featured: false,
  },
];
