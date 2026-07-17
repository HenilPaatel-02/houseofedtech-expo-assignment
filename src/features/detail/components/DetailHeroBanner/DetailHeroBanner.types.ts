import { MovieDetail } from "../../types/detail.types";
export interface DetailHeroBannerProps {
  movie: MovieDetail;
  onPlay?: () => void;
  onAddToList?: () => void;
}
