'use client';

import { Separator } from '@radix-ui/react-separator';

import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';
import { TypographyH4 } from '@/components/ui/typography';
import type { DashboardSubItem } from '@/constants/dasboard';

interface Props {
  title: string;
  items: DashboardSubItem[];
}
const ContentHeader = ({ title, items }: Props) => {
  return (
    <header>
      <div className="space-y-1 px-2 flex justify-between items-center">
        <TypographyH4>{title}</TypographyH4>
        <BreadcrumbWithCustomSeparator items={items} />
      </div>
      <Separator className="my-2 border-black border-1" />
    </header>
  );
};

export default ContentHeader;
