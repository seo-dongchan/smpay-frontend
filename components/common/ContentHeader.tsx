import { Separator } from '@radix-ui/react-separator';
import { TypographyH4 } from '@/components/ui/typography';
import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';

const ContentHeader = () => {
  return (
    <header>
      <div className="space-y-1 px-2 flex justify-between items-center">
        <TypographyH4>대행사 등록</TypographyH4>
        <BreadcrumbWithCustomSeparator />
      </div>
      <Separator className="my-2 border-black border-1" />
    </header>
  );
};

export default ContentHeader;
