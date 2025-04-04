import Link from 'next/link';
import { Fragment } from 'react';
import { HomeIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItemType {
  title: string;
  url: string;
}

export function BreadcrumbWithCustomSeparator({ items = [] }: { items: BreadcrumbItemType[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <Fragment key={item.url}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === items.length - 1 ? (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.url}>{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
