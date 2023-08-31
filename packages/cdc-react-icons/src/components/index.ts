import { ArrowDown } from "./ArrowDown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowUp } from "./ArrowUp";
import { ChevronDoubleLeft } from "./ChevronDoubleLeft";
import { ChevronDoubleRight } from "./ChevronDoubleRight";
import { ChevronDown } from "./ChevronDown";
import { ChevronUp } from "./ChevronUp";
import { Dashboard } from "./Dashboard";
import { Dots } from "./Dots";
import { Filter } from "./Filter";
import { Logout } from "./Logout";
import { Menu } from "./Menu";
import { Notifications } from "./Notifications";
import { Process } from "./Process";
import { Quality } from "./Quality";
import { Settings } from "./Settings";
import { SquareArrowUpRight } from "./SquareArrowUpRight";
import { Support } from "./Support";
import { User } from "./User";

export interface IconProps {
  className?: string;
  hasBadge?: boolean;
}

export const Icons = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDown,
  ChevronUp,
  Dashboard,
  Dots,
  Filter,
  Logout,
  Menu,
  Notifications,
  Process,
  Quality,
  Settings,
  SquareArrowUpRight,
  Support,
  User,
};

export type IconNames = keyof typeof Icons;
