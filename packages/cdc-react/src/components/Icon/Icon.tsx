import {
  IconChevronDoubleLeft,
  IconChevronDoubleRight,
  IconChevronDown,
  IconChevronUp,
  IconDashboard,
  IconLogout,
  IconMenu,
  IconNotifications,
  IconProcess,
  IconQuality,
  IconSettings,
  IconSquareArrowUpRight,
  IconSupport,
  IconUser,
} from "@us-gov-cdc/cdc-react-icons";
import "./Icon.scss";

const Icons = {
  "chevron-down": (hasBadge?: boolean, className?: string) => (
    <IconChevronDown className={className} />
  ),
  "chevron-up": (hasBadge?: boolean, className?: string) => (
    <IconChevronUp className={className} />
  ),
  "chevron-double-left": (hasBadge?: boolean, className?: string) => (
    <IconChevronDoubleLeft className={className} />
  ),
  "chevron-double-right": (hasBadge?: boolean, className?: string) => (
    <IconChevronDoubleRight className={className} />
  ),
  dashboard: (hasBadge?: boolean, className?: string) => (
    <IconDashboard className={className} />
  ),
  logout: (hasBadge?: boolean, className?: string) => (
    <IconLogout className={className} />
  ),
  menu: (hasBadge?: boolean, className?: string) => (
    <IconMenu className={className} />
  ),
  notifications: (hasBadge?: boolean, className?: string) => (
    <IconNotifications hasBadge={hasBadge} className={className} />
  ),
  process: (hasBadge?: boolean, className?: string) => (
    <IconProcess className={className} />
  ),
  quality: (hasBadge?: boolean, className?: string) => (
    <IconQuality className={className} />
  ),
  settings: (hasBadge?: boolean, className?: string) => (
    <IconSettings className={className} />
  ),
  squareArrowUpRight: (hasBadge?: boolean, className?: string) => (
    <IconSquareArrowUpRight className={className} />
  ),
  support: (hasBadge?: boolean, className?: string) => (
    <IconSupport className={className} />
  ),
  user: (hasBadge?: boolean, className?: string) => (
    <IconUser className={className} />
  ),
} as const;

export type IconNames = keyof typeof Icons;

interface IconProps {
  name: IconNames;
  hasBadge?: boolean;
  className?: string;
}

export const Icon = ({ ...props }: IconProps) => {
  const { name, hasBadge, className } = props;

  const icon: JSX.Element = Icons[name](hasBadge, className);

  return icon;
};
