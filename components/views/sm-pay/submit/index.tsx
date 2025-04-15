import { Button } from '@/components/ui/button';
import AdvertiserSection from './AdvertiserSection';
import RuleSection from './RuleSection';
import ScheduleSection from './ScheduleSection';
import GuidSection from '@/components/common/sm-pay/GuideSection';
const SmPaySubmitView = () => {
  return (
    <div>
      <GuidSection viewType="list" />
      <AdvertiserSection />
      <RuleSection />
      <ScheduleSection />

      <div className="flex justify-center gap-4 py-5">
        <Button className="w-[150px]">확인</Button>
        <Button variant="cancel" className="w-[150px]">
          취소
        </Button>
      </div>
    </div>
  );
};

export default SmPaySubmitView;
