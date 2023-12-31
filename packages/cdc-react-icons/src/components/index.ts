import { ArrowDown } from "./ArrowDown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowUp } from "./ArrowUp";
import { CloseSquare } from "./CloseSquare";
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
import { Dashboard } from "./Dashboard";
import { Dots } from "./Dots";
import { Filter } from "./Filter";
import { SquareHalfArrowRight } from "./SquareHalfArrowRight";
import { Menu } from "./Menu";
import { Minus } from "./Minus";
import { Bell } from "./Bell";
import { Plus } from "./Plus";
import { ZigZag } from "./ZigZag";
import { Star } from "./Star";
import { Search } from "./Search";
import { Settings } from "./Settings";
import { SortArrow } from "./SortArrow";
import { SquareArrowUpRight } from "./SquareArrowUpRight";
import { Support } from "./Support";
import { Person } from "./Person";
import { Bolt } from "./Bolt";
import { Building } from "./Building";
import { Cube } from "./Cube";
import { Eye } from "./Eye";
import { Heart } from "./Heart";
import { Swatch } from "./Swatch";
import { Calendar } from "./Calendar";
import { Cloud } from "./Cloud";
import { CloudArrowDown } from "./CloudArrowDown";
import { CloudArrowUp } from "./CloudArrowUp";
import { Meter } from "./Meter";
import { Target } from "./Target";
import { HandPointArcs } from "./HandPointArcs";
import { House } from "./House";
import { LockShield } from "./LockShield";
import { Lock } from "./Lock";
import { SpeechBubble } from "./SpeechBubble";
import { TrafficCone } from "./TrafficCone";
import { BarGraph } from "./BarGraph";
import { Folder } from "./Folder";
import { PageLayout } from "./PageLayout";
import { PaperLines } from "./PaperLines";

export interface IconProps {
  className?: string;
  hasBadge?: boolean;
}

export const Icons = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarGraph,
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
  Eye,
  Filter,
  Folder,
  HandPointArcs,
  Heart,
  House,
  Lock,
  LockShield,
  SquareHalfArrowRight,
  Menu,
  Meter,
  Minus,
  Bell,
  PageLayout,
  PaperLines,
  Person,
  Plus,
  ZigZag,
  Star,
  Search,
  Settings,
  SortArrow,
  SpeechBubble,
  SquareArrowUpRight,
  Support,
  Swatch,
  Target,
  TrafficCone,
};

export type IconNames = keyof typeof Icons;
