import type { Metadata } from 'next';
import type { DashboardSubItem } from '@/constants/dasboard';
import ContentHeader from '@/components/common/ContentHeader';
import SmPaySubmitDetailView from '@/components/views/sm-pay/submit/detail';

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `SM Pay 상세 - ${slug}`,
  };
}

// TODO : admin/sm-pay/submit/[slug] 변경
export default async function SubmitPage({ params }: { params: PageParams }) {
  const { slug } = await params;

  console.log('slug', slug);

  return (
    <div>
      <ContentHeader title="심사 요청 상세" items={breadcrumbItems} />
      <SmPaySubmitDetailView />
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
    title: '신청서 제출',
    url: '/sm-pay/management/[slug]',
  },
];
