export interface DetailHeaderProps {
  title: string;

  showTitle?: boolean;

  isFavourite?: boolean;

  onBack?: () => void;

  onShare?: () => void;

  onFavourite?: () => void;
}