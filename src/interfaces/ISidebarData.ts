import { IconType } from "react-icons";

export interface SubNavItem {
  title: string;
  path: string;
}

export interface SidebarDataItem {
  title: string;
  path: string;
  icon: IconType;
  subNav?: SubNavItem[]; // Optional subNav property
}
