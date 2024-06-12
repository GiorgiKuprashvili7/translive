import {
  HiChartPie,
  HiClipboardList,
  HiCollection,
  HiDocumentReport,
  HiShoppingBag,
  HiSupport,
} from "react-icons/hi";
import { SidebarDataItem } from "../../../interfaces/ISidebarData";

export const SidebarData: SidebarDataItem[] = [
  {
    title: "overview",
    path: "",
    icon: HiChartPie,
  },
  {
    title: "pages",
    path: "",
    icon: HiDocumentReport,

    subNav: [
      {
        title: "Revenue",
        path: "",
      },
    ],
  },
  {
    title: "category",
    path: "/category",
    icon: HiShoppingBag,

    subNav: [
      {
        title: "Revenue",
        path: "",
      },
      {
        title: "Admins",
        path: "",
      },
    ],
  },
];

export const StaticSidebarData = [
  {
    title: "docs",
    path: "",
    icon: HiClipboardList,
  },
  {
    title: "components",
    path: "",
    icon: HiCollection,
  },
  {
    title: "help",
    path: "",
    icon: HiSupport,
  },
];
