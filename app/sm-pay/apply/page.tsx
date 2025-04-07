import ContentHeader from '@/components/common/ContentHeader';
import { DashboardSubItem } from '@/constants/dasboard';

export default function Page() {
  return (
    <div>
      <ContentHeader title="SM Pay 신청" items={breadcrumbItems} />
    </div>
  );
}

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: 'SM Pay 관리',
    url: '/sm-pay',
  },
  {
    title: 'SM Pay관리',
    url: '/sm-pay/management',
  },
  {
    title: 'SM Pay 신청',
    url: '/sm-pay/apply',
  },
];
