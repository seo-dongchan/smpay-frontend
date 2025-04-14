import ContentHeader from '@/components/common/ContentHeader';
import SMPayChargeCountView from '@/components/views/sm-pay/charge';
import { type DashboardSubItem } from '@/constants/dasboard';

export default function ChargeCountPage() {
  return (
    <div>
      <ContentHeader title="충전 회수 현황" items={breadcrumbItems} />
      <SMPayChargeCountView />
    </div>
  );
}

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: 'SM Pay 관리',
    url: '/sm-pay',
  },
  {
    title: 'SM Pay 충전',
    url: '/sm-pay/charge',
  },
];
