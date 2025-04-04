// types/dashboard.ts 또는 constants.ts에 함께 작성해도 OK

export interface DashboardSubItem {
  title: string;
  url: string;
}

export interface DashboardItem {
  title: string;
  url: string;
  items?: DashboardSubItem[];
}

export const DASHBOARD_ITEMS: DashboardItem[] = [
  {
    title: 'SM Pay',
    url: '/sm-pay',
    items: [
      { title: 'SM Pay 관리', url: '/sm-pay/management' },
      { title: '충전 회수 관리', url: '/sm-pay/charge' },
    ],
  },
  {
    title: '통합 관리 보고서',
    url: '/test',
  },
  {
    title: '네이버 광고 관리',
    url: '/agency',
  },
];
