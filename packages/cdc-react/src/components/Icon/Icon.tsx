import {
  CheveronDoubleLeft,
  CheveronDoubleRight,
  CheveronDown,
  CheveronUp,
  Dashboard,
  Logout,
  Menu,
  Notifications,
  Process,
  Quality,
  Settings,
  SquareArrowUpRight,
  User,
} from "@us-gov-cdc/cdc-react-icons";
import "./Icon.scss";

const Icons = {
  "chevron-down": (hasBadge?: boolean, className?: string) => (
    <CheveronDown className={className} />
  ),
  "chevron-up": (hasBadge?: boolean, className?: string) => (
    <CheveronUp className={className} />
  ),
  "chevron-double-left": (hasBadge?: boolean, className?: string) => (
    <CheveronDoubleLeft className={className} />
  ),
  "chevron-double-right": (hasBadge?: boolean, className?: string) => (
    <CheveronDoubleRight className={className} />
  ),
  dashboard: (hasBadge?: boolean, className?: string) => (
    <Dashboard className={className} />
  ),
  logout: (hasBadge?: boolean, className?: string) => (
    <Logout className={className} />
  ),
  menu: (hasBadge?: boolean, className?: string) => (
    <Menu className={className} />
  ),
  notifications: (hasBadge?: boolean, className?: string) => (
    <Notifications hasBadge={hasBadge} className={className} />
  ),
  process: (hasBadge?: boolean, className?: string) => (
    <Process className={className} />
  ),
  quality: (hasBadge?: boolean, className?: string) => (
    <Quality className={className} />
  ),
  settings: (hasBadge?: boolean, className?: string) => (
    <Settings className={className} />
  ),
  squareArrowUpRight: (hasBadge?: boolean, className?: string) => (
    <SquareArrowUpRight className={className} />
  ),
  support: (hasBadge?: boolean, className?: string) => (
    <SquareArrowUpRight className={className} />
  ),
  user: (hasBadge?: boolean, className?: string) => (
    <User className={className} />
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
