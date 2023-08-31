import { ArrowDown } from "./ArrowDown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowUp } from "./ArrowUp";
import { CloseSquare } from "./CloseSquare";
import { Check } from "./Check";
import { CheckSquare } from "./CheckSquare";
import { ChevronDoubleLeft } from "./ChevronDoubleLeft";
import { ChevronDoubleRight } from "./ChevronDoubleRight";
import { ChevronDown } from "./ChevronDown";
import { ChevronUp } from "./ChevronUp";
import { Close } from "./Close";
import { Dashboard } from "./Dashboard";
import { Dots } from "./Dots";
import { Filter } from "./Filter";
import { Logout } from "./Logout";
import { Menu } from "./Menu";
import { Minus } from "./Minus";
import { Notifications } from "./Notifications";
import { Plus } from "./Plus";
import { Process } from "./Process";
import { Quality } from "./Quality";
import { Search } from "./Search";
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
  CloseSquare,
  Check,
  CheckSquare,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDown,
  ChevronUp,
  Close,
  Dashboard,
  Dots,
  Filter,
  Logout,
  Menu,
  Minus,
  Notifications,
  Plus,
  Process,
  Quality,
  Search,
  Settings,
  SquareArrowUpRight,
  Support,
  User,
};

export type IconNames = keyof typeof Icons;
