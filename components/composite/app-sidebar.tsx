'use client';

import { SquareTerminal, UserRound } from 'lucide-react';

// import { NavProjects } from '@/components/composite/nav-projects';
// import { TeamSwitcher } from '@/components/composite/team-switcher';
// import { NavUser } from '@/components/composite/nav-user';
import { NavDashboard } from '@/components/composite/nav-dashboard';
import { NavHeader } from '@/components/composite/nav-header';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavUser } from './nav-user';

const navDashboard = [
  {
    title: '대행사',
    url: '#',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: '대행사 등록',
        url: '/agency',
      },
    ],
  },
  {
    title: '회원',
    url: '#',
    icon: UserRound,
    isActive: true,
    items: [
      {
        title: '회원 등록',
        url: '/member',
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavDashboard items={navDashboard} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
