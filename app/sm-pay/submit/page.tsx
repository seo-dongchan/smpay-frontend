import ContentHeader from '@/components/common/ContentHeader';
import SmPaySubmitView from '@/components/views/sm-pay/submit';

import type { DashboardSubItem } from '@/constants/dasboard';
export default function SubmitPage() {
  return (
    <div>
      <ContentHeader title="심사 요청 목록" items={breadcrumbItems} />
      <SmPaySubmitView />
    </div>
  );
}

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: 'SM Pay 관리',
    url: '/sm-pay',
  },
  {
    title: 'SM Pay 심사',
    url: '/sm-pay/submit',
  },
  {
    title: '심사 요청 목록',
    url: '/sm-pay/submit',
  },
];
