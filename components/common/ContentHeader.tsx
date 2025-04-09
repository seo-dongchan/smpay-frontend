'use client';

import { Separator } from '@radix-ui/react-separator';

import { Typography } from '@/components/ui/typography';
import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';
import type { DashboardSubItem } from '@/constants/dasboard';

interface Props {
  title: string;
  items: DashboardSubItem[];
}
const ContentHeader = ({ title, items }: Props) => {
  return (
    <header>
      <div className="space-y-1 px-2 flex justify-between items-center">
        <Typography variant="h4">{title}</Typography>
        <BreadcrumbWithCustomSeparator items={items} />
      </div>
      <Separator className="my-2 border-black border-1" />
    </header>
  );
};

export default ContentHeader;
