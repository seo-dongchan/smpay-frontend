'use client';
import { useState } from 'react';
import { Descriptions } from 'antd';

import { BulletLabel } from '@/components/composite/label';
import { TooltipHover } from '@/components/composite/hover-tooltip';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { hoverData } from '../../apply/constants';

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

      <Descriptions column={1} bordered styles={{ label: { width: 200 } }}>
        <Descriptions.Item label={<span className={descLabelClassName}>일 최대 충전 한도</span>}>
          <span>1일 1회</span>
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>최초 충전 금액 설정</span>}>
          {isEditing ? (
            <Input className="max-w-[500px]" />
          ) : (
            <span className="text-blue-600">100,000원</span>
          )}
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>일 최대 충전 한도</span>}>
          {isEditing ? (
            <Input className="max-w-[500px]" />
          ) : (
            <span className="text-blue-600">300,000원</span>
          )}
        </Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default ScheduleSection;

const descLabelClassName = 'font-bold';
