import { MovieDetail } from "../../types/detail.types";
export interface MetadataSectionProps {
  movie: MovieDetail;
  quality?: "HD" | "4K";
}
