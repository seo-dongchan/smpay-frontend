import ContentHeader from '@/components/common/ContentHeader';
import MemberManagementView from '@/components/views/account/member-management';
import { DashboardSubItem } from '@/constants/dasboard';

export default function MemberManagementPage() {
  return (
    <div>
      <ContentHeader title="회원 관리" items={breadcrumbItems} />
      <MemberManagementView />
    </div>
  );
}

const breadcrumbItems: DashboardSubItem[] = [
  {
    title: '계정 관리',
    url: '/account',
  },
  {
    title: '회원 관리',
    url: '/account/member-management',
  },
  {
    title: '회원 등록',
    url: '/account/member-register',
  },
];
