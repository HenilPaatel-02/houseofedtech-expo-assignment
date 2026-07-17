import { Movie } from "../types/movie.types";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    description: "A science fiction masterpiece.",

    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",

    genre: "Sci-Fi",

    rating: 4.8,

    duration: "2h 49m",

    year: 2014,

    featured: true,
  },

  {
    id: "2",

    title: "Avatar",

    description: "Epic fantasy world.",

    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",

    genre: "Adventure",

    rating: 4.5,

    duration: "2h 42m",

    year: 2022,

    featured: false,
  },
];
