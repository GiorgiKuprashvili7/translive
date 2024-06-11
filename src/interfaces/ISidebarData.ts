export interface SubNavItem {
  title: string;
  path: string;
  icon?: string; // Optional icon property
}

export interface SidebarDataItem {
  title: string;
  path: string;
  icon: string;
  iconClosed?: string; // Optional iconClosed property (defaults to 'closed')
  iconOpened?: string; // Optional iconOpened property (defaults to 'opened')
  subNav?: SubNavItem[]; // Optional subNav property
}
