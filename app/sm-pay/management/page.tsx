import SMPayManagementView from '@/components/views/sm-pay/mamangement';
import ContentHeader from '@/components/common/ContentHeader';
// TODO : agency 제거

export default function ManagementPage() {
  return (
    <div>
      <ContentHeader />
      <SMPayManagementView />
    </div>
  );
}
