import { sidebarModel } from './../../domain/models/sidebar-model';

export const adminList: sidebarModel[] = [
  {
    label: 'Library',
    uniqueLabel: 'Library',
    icon: 'fa-book-open',
    arrowIcon: true,
    route: null,
    routerLinkActive: null,
    collapsed: false,
    navItems: [
      {
        label: 'Head & Neck',
        icon: 'fa-map-marker-alt',
        route: '/HeadandNeck',
      },
      { label: 'chest', icon: 'fa-user', route: '/chest' },
      { label: 'Cardiac', icon: 'fa-layer-group', route: '/Cardiac' },
      {
        label: 'Neuroradiology',
        icon: 'fa-map-marker-alt',
        route: '/Neuroradiology',
      },
    ],
  },
  {
    label: 'users',
    uniqueLabel: 'users',
    icon: 'fa-users',
    arrowIcon: false,
    route: '/admin/users',
    routerLinkActive: 'active',
    collapsed: true,
    navItems: [],
  },
  {
    label: 'Dicom Nodes',
    uniqueLabel: 'dicomnodes',
    icon: 'fa-users',
    arrowIcon: false,
    route: '/admin/dicomnodes',
    routerLinkActive: 'active',
    collapsed: true,
    navItems: [],
  },
  {
    label: 'configrations',
    uniqueLabel: 'configrations',
    icon: 'fa-map-marker-alt',
    arrowIcon: true,
    route: null,
    routerLinkActive: null,

    collapsed: true,
    navItems: [
      { label: 'Contact', icon: 'fa-map-marker-alt', route: '/createuser' },
      { label: 'config', icon: 'fa-map-marker-alt', route: '/config' },
      { label: 'Orm', icon: 'fa-fw fa-user', route: '/orm' },
    ],
  },
  {
    label: 'Lectures',
    uniqueLabel: 'Lectures',
    icon: 'fa-graduation-cap',
    arrowIcon: false,
    route: '/admin/Lectures',
    routerLinkActive: 'active',
    collapsed: true,
    navItems: [],
  },
  {
    label: 'Mailbox',
    uniqueLabel: 'Mailbox',
    icon: 'fa-envelope',
    arrowIcon: false,
    route: '/Mailbox',
    routerLinkActive: 'active',
    collapsed: true,
    navItems: [],
  },
];

export const usersList: sidebarModel[] = [
  {
    label: 'Worklist',
    uniqueLabel: 'Worklist',
    icon: 'fa-envelope',
    arrowIcon: false,
    route: '/worklist',
    routerLinkActive: 'active',
    collapsed: true,
    navItems: [],
  },
];
