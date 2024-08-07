import { ArrowDown } from "./ArrowDown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowUp } from "./ArrowUp";
import { BarGraph } from "./BarGraph";
import { Bell } from "./Bell";
import { Bolt } from "./Bolt";
import { Building } from "./Building";
import { Calendar } from "./Calendar";
import { Check } from "./Check";
import { CheckSquare } from "./CheckSquare";
import { ChevronDoubleDown } from "./ChevronDoubleDown";
import { ChevronDoubleLeft } from "./ChevronDoubleLeft";
import { ChevronDoubleRight } from "./ChevronDoubleRight";
import { ChevronDoubleUp } from "./ChevronDoubleUp";
import { ChevronDown } from "./ChevronDown";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronRight } from "./ChevronRight";
import { ChevronUp } from "./ChevronUp";
import { Close } from "./Close";
import { CloseSquare } from "./CloseSquare";
import { Cloud } from "./Cloud";
import { CloudArrowDown } from "./CloudArrowDown";
import { CloudArrowUp } from "./CloudArrowUp";
import { Cube } from "./Cube";
import { Dashboard } from "./Dashboard";
import { Dots } from "./Dots";
import { ExclamationCircle } from "./ExclamationCircle";
import { ExclamationTriangle } from "./ExclamationTriangle";
import { Eye } from "./Eye";
import { Filter } from "./Filter";
import { Folder } from "./Folder";
import { HandPointArcs } from "./HandPointArcs";
import { Heart } from "./Heart";
import { House } from "./House";
import { Lock } from "./Lock";
import { LockShield } from "./LockShield";
import { Menu } from "./Menu";
import { Meter } from "./Meter";
import { Minus } from "./Minus";
import { PageLayout } from "./PageLayout";
import { PaperLines } from "./PaperLines";
import { Person } from "./Person";
import { PillCircle } from "./PillCircle";
import { PillDiamond } from "./PillDiamond";
import { PillSquare } from "./PillSquare";
import { PillTriangle } from "./PillTriangle";
import { Plus } from "./Plus";
import { Search } from "./Search";
import { Settings } from "./Settings";
import { SortArrow } from "./SortArrow";
import { SortArrowDown } from "./SortArrowDown";
import { SortArrowUp } from "./SortArrowUp";
import { SpeechBubble } from "./SpeechBubble";
import { SquareArrowUpRight } from "./SquareArrowUpRight";
import { SquareHalfArrowRight } from "./SquareHalfArrowRight";
import { Star } from "./Star";
import { Support } from "./Support";
import { Swatch } from "./Swatch";
import { Target } from "./Target";
import { TrafficCone } from "./TrafficCone";
import { ZigZag } from "./ZigZag";

export interface IconProps {
  className?: string;
  hasBadge?: boolean;
  title?: string;
}

export const Icons = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarGraph,
  Bell,
  Bolt,
  Building,
  Calendar,
  Check,
  CheckSquare,
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDoubleUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Close,
  CloseSquare,
  Cloud,
  CloudArrowDown,
  CloudArrowUp,
  Cube,
  Dashboard,
  Dots,
  ExclamationCircle,
  ExclamationTriangle,
  Eye,
  Filter,
  Folder,
  HandPointArcs,
  Heart,
  House,
  Lock,
  LockShield,
  Menu,
  Meter,
  Minus,
  PageLayout,
  PaperLines,
  Person,
  PillCircle,
  PillDiamond,
  PillSquare,
  PillTriangle,
  Plus,
  Search,
  Settings,
  SortArrow,
  SortArrowDown,
  SortArrowUp,
  SpeechBubble,
  SquareArrowUpRight,
  SquareHalfArrowRight,
  Star,
  Support,
  Swatch,
  Target,
  TrafficCone,
  ZigZag,
};

export type IconNames = keyof typeof Icons;
