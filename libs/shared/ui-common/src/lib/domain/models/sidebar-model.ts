export class sidebarModel {
  label!: string;
  uniqueLabel!: string;
  icon!: string;
  arrowIcon!: boolean;
  route!: string | null;
  routerLinkActive!: string | null;
  collapsed!: boolean;
  navItems!: NavItem[];
}
export class NavItem {
  label!: string;
  icon!: string;
  route!: string;
}
