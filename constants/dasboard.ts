// types/dashboard.ts 또는 constants.ts에 함께 작성해도 OK

import {
  AppWindow,
  ChartSpline,
  ChartColumnBig,
  Smile,
  Eraser,
  AlarmClock,
  type LucideIcon,
} from 'lucide-react';

export interface DashboardSubItem {
  title: string;
  url: string;
  disabled?: boolean;
}

export type DashboardItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: DashboardSubItem[];
};

export const DASHBOARD_ITEMS = [
  {
    title: 'SM Pay',
    url: '/',
    icon: AppWindow,
    isActive: true,
    items: [
      {
        title: 'SM Pay 관리',
        url: '/sm-pay/management',
      },
      {
        title: '충전 회수 관리',
        url: '/sm-pay/charge',
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
    url: '/account',
    icon: Smile,
    isActive: true,
    items: [
      {
        title: '대행사 관리',
        url: '/account/agency',
      },
      {
        title: '회원 등록',
        url: '/account/sign-up',
      },
      {
        title: '대행사 등록',
        url: '/account/agency-register',
        disabled: true,
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
        url: '/',
      },
      {
        title: 'FAQ 관리',
        url: '/',
      },
    ],
  },
  {
    title: '알림 설정',
    url: '/test',
    icon: AlarmClock,
  },
  {
    title: '결제 화면',
    url: '/payment',
    icon: Smile,
  },
];
