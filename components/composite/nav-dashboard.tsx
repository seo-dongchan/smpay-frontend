'use client';

import {
  AppWindow,
  ChartColumnBig,
  ChartSpline,
  ChevronRight,
  Smile,
  Eraser,
  AlarmClock,
} from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

const dashboardItems = [
  {
    title: 'SM Pay',
    url: '/',
    icon: AppWindow,
    isActive: true,
    items: [
      {
        title: 'SM Pay 관리',
        url: '/agency',
      },
      {
        title: '충전 회수 관리',
        url: '/agency',
      },
    ],
  },
  {
    title: '네이버 광고 관리',
    url: '/',
    icon: ChartSpline,
    isActive: true,
    items: [
      {
        title: '검색 광고 관리',
        url: '/agency',
      },
      {
        title: '쇼핑검색 광고 관리',
        url: '/agency',
      },
    ],
  },
  {
    title: '통합 관리 보고서',
    url: '/test',
    icon: ChartColumnBig,
  },
  {
    title: '계정 관리',
    url: '#',
    icon: Smile,
    isActive: true,
    items: [
      {
        title: '대행사 등록',
        url: '/member',
      },
      {
        title: '회원 등록',
        url: '/member',
      },
    ],
  },
  {
    title: 'CS 관리',
    url: '/test',
    icon: Smile,
  },
  {
    title: '게시판 관리',
    url: '#',
    icon: Eraser,
    isActive: true,
    items: [
      {
        title: '공지 관리',
        url: '/member',
      },
      {
        title: 'FAQ 관리',
        url: '/member',
      },
    ],
  },
  {
    title: '알림 설정',
    url: '/test',
    icon: AlarmClock,
  },
];

export function NavDashboard() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
      <SidebarMenu>
        {dashboardItems.map((item) =>
          item.items && item.items.length > 0 ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                <a href={item.url} className="flex items-center gap-2">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
