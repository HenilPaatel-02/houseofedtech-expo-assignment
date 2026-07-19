export interface Profile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  notificationsEnabled: boolean;
  darkModeEnabled: boolean;
}
