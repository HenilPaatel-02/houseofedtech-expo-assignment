export interface ProfileHeaderProps {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  onEditProfile?: () => void;
}
