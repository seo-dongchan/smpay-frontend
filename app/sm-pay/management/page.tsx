import SMPayManagementView from '@/components/views/sm-pay/mamangement';
import ContentHeader from '@/components/common/ContentHeader';
import { DashboardSubItem } from '@/constants/dasboard';
// TODO : agency 제거

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: 'SM Pay 관리',
    url: '/sm-pay',
  },
  {
    title: 'SM Pay 관리',
    url: '/sm-pay/management',
  },
];

export default function ManagementPage() {
  return (
    <div>
      <ContentHeader title="SM Pay 관리" items={breadcrumbItems} />
      <SMPayManagementView />
    </div>
  );
}
