'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Separator } from '@radix-ui/react-separator';

import { TypographyH4 } from '@/components/ui/typography';
import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';
import { DASHBOARD_ITEMS } from '@/constants/dasboard';

const ContentHeader = () => {
  const pathname = usePathname();

  // 현재 경로에 맞는 타이틀과 breadcrumb 생성
  const { title, breadcrumbItems } = useMemo(() => {
    for (const item of DASHBOARD_ITEMS) {
      if (item.url === pathname) {
        return {
          title: item.title,
          breadcrumbItems: [{ title: item.title, url: item.url }],
        };
      }

      if (item.items) {
        const match = item.items.find((child) => child.url === pathname);
        if (match) {
          return {
            title: item.title,
            breadcrumbItems: [
              { title: item.title, url: item.url },
              { title: match.title, url: match.url },
            ],
          };
        }
      }
    }

    return { title: '-', breadcrumbItems: [] };
  }, [pathname]);

  return (
    <header>
      <div className="space-y-1 px-2 flex justify-between items-center">
        <TypographyH4>{title}</TypographyH4>
        <BreadcrumbWithCustomSeparator items={breadcrumbItems} />
      </div>
      <Separator className="my-2 border-black border-1" />
    </header>
  );
};

export default ContentHeader;
