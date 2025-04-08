import { GuideBox } from '@/components/common/Box';
import { CircleAlert } from 'lucide-react';

type GuidSectionProps = {
  children: React.ReactNode;
};

const GuidSection = ({ children }: GuidSectionProps) => {
  return (
    <GuideBox>
      <div className="flex items-start gap-2">
        <div className="flex items-center justify-center w-[18px] h-[18px] bg-[#1062FF] rounded-full mt-1">
          <CircleAlert className="w-[18px] h-[18px] text-white" />
        </div>
        {children}
      </div>
    </GuideBox>
  );
};

export default GuidSection;
