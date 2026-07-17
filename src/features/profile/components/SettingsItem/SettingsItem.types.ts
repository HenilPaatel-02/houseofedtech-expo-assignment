import { ReactNode } from "react";
export interface SettingsItemProps {
  title: string;
  subtitle?: string;
  leftIcon: string;
  rightIcon?: string;
  onPress?: () => void;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  disabled?: boolean;
  rightComponent?: ReactNode;
}
