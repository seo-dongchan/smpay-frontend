import ContentHeader from '@/components/common/ContentHeader';
import AgencyRegisterView from '@/components/views/account/agency-register';
import type { DashboardSubItem } from '@/constants/dasboard';

export default function AgencyRegisterPage() {
  return (
    <div>
      <ContentHeader title="계정관리" items={breadcrumbItems} />
      <AgencyRegisterView />
    </div>
  );
}

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: '-',
    url: '/',
  },
  {
    title: '-',
    url: '/',
  },
];
