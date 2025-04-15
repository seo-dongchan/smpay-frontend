'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { BulletLabel } from '@/components/composite/label';
import { TooltipHover } from '@/components/composite/hover-tooltip';

import { hoverData } from '@/components/common/sm-pay/constants';
import ScheduleDesc, { ScheduleEditDesc } from '@/components/common/sm-pay/ScheduleDesc';

const ScheduleSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 py-4">
          <BulletLabel labelClassName="text-base">선결제 스케쥴 설정</BulletLabel>
          <TooltipHover
            triggerContent={hoverData['prepayment'].triggerContent}
            content={hoverData['prepayment'].content}
          />
        </div>

        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          변경하기
        </Button>
      </div>

      {isEditing ? <ScheduleEditDesc /> : <ScheduleDesc />}
    </section>
  );
};

export default ScheduleSection;
