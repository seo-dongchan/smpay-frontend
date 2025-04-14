'use client';

import { useState } from 'react';
import { Descriptions } from 'antd';

import { TooltipHover } from '@/components/composite/hover-tooltip';
import { BulletLabel } from '@/components/composite/label';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

import HistoryModal from './HistoryModal';

import { hoverData } from '../../apply/constants';

const RuleSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHistory, setIsHistory] = useState(false);
  return (
    <section>
      {isHistory && <HistoryModal open={isHistory} onClose={() => setIsHistory(false)} />}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 py-4">
          <BulletLabel labelClassName="text-base">충전 규칙 설정</BulletLabel>

          <TooltipHover
            triggerContent={hoverData['rule'].triggerContent}
            content={hoverData['rule'].content}
          />
        </div>

        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? '취소하기' : '변경하기'}
        </Button>

        <Button variant="outline" onClick={() => setIsHistory(true)}>
          변경 이력 보기
        </Button>
      </div>

      <Descriptions column={1} bordered styles={{ label: { width: 200 } }}>
        {isEditing && (
          <Descriptions.Item label={<span className="font-bold">충전 규칙 설정</span>}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="min-w-[100px]">기준 ROAS가</span>
                <Input className="w-[100px]" />
                <span>%</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="min-w-[100px]">
                    <strong>이상</strong>이면 충전 금액을
                  </span>
                  <RadioGroup defaultValue="percent" className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="percent" id="above-percent" />
                      <Label htmlFor="above-percent">정률로</Label>
                    </div>
                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="fixed" id="above-fixed" />
                      <Label htmlFor="above-fixed">정액으로</Label>
                    </div>
                  </RadioGroup>
                  <Input className="w-[100px]" />
                  <span>%씩</span>
                  <span className="text-blue-600">증액하고</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="min-w-[100px]">
                    <strong>미만</strong>이면 충전 금액을
                  </span>
                  <RadioGroup defaultValue="percent" className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="percent" id="below-percent" />
                      <Label htmlFor="below-percent">정률로</Label>
                    </div>
                    <div className="flex items-center gap-1">
                      <RadioGroupItem value="fixed" id="below-fixed" />
                      <Label htmlFor="below-fixed">정액으로</Label>
                    </div>
                  </RadioGroup>
                  <Input className="w-[100px]" />
                  <span>%씩</span>
                  <span className="text-red-600">감액합니다.</span>
                </div>
              </div>
            </div>
          </Descriptions.Item>
        )}

        <Descriptions.Item
          label={<span className="font-bold">{isEditing ? '설정 결과' : '충전 규칙 설정'}</span>}
        >
          <div className="text-sm flex flex-col gap-2">
            <p>
              기준 ROAS가 <span className="font-medium">400% 이상</span>이면 충전 금액을{' '}
              <span className="text-blue-600">정률로 3%씩 증액</span>하고
            </p>
            <p>
              기준 ROAS가 <span className="font-medium">400% 미만</span>이면 충전 금액을{' '}
              <span className="text-red-600">정률로 5%씩 감액</span>합니다.
            </p>
          </div>
        </Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default RuleSection;
