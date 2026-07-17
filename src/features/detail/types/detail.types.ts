export interface MovieDetail {
  id: string;
  title: string;
  description: string;

  banner: string;
  poster: string;

  genre: string[];

  rating: number;

  duration: string;

  year: number;
}