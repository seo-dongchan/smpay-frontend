import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { DashboardSubItem } from '@/constants/dasboard';
import ContentHeader from '@/components/common/ContentHeader';

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `SM Pay 상세 - ${slug}`,
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params;

  const mockData = {
    id: slug,
    name: `SM Pay 항목 ${slug}`,
    status: 'active',
  };

  if (!mockData) notFound();

  return (
    <div className="p-4">
      <ContentHeader title="SM Pay 상세 페이지" items={breadcrumbItems} />
      <p>Slug: {slug}</p>
      <p>이름: {mockData.name}</p>
      <p>상태: {mockData.status}</p>
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
];
