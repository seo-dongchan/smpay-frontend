import { Descriptions } from 'antd';

import { IconBadge } from '@/components/composite/icon';
import { BulletLabel } from '@/components/composite/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { PopoverSimple, Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ViewProps } from '.';

const ViewCreate = ({ onSubmit, onCancel, display }: ViewProps) => {
  return (
    <section className={cn(!display && 'hidden')}>
      <div>
        <div className="flex items-center gap-4 pb-4">
          <BulletLabel labelClassName="text-base">광고주 기본 정보</BulletLabel>
          <Button variant="outline">변경하기</Button>
        </div>

        <Descriptions column={1} bordered>
          <Descriptions.Item label={<span className="w-[200px]">사업자명</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">대표자명</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">사업자 등록 번호</span>}>
            <div className="flex gap-2">
              <Input className="max-w-[400px]" />
              <Button variant="outline" className="w-[100px]">
                중복 체크
              </Button>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">담당자 휴대폰 번호</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">담당자 이메일 주소</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div>
        <div className="flex items-center gap-2 py-4">
          <BulletLabel>충전 규칙 설정</BulletLabel>
          <Popover>
            <PopoverTrigger>
              <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <div className="flex flex-start gap-2">
                <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer mt-1" />
                <p>
                  입력된 ROAS를 기준으로, 기준 이상이면 충전 금액을 증액하고 기준 미만이면
                  감액합니다.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Descriptions column={1} bordered>
          <Descriptions.Item label={<span className="w-[200px]">충전 규칙 설정</span>}>
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

          <Descriptions.Item label={<span className="w-[200px]">설정 결과</span>}>
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
      </div>

      <div>
        <div className="flex items-center gap-2 py-4">
          <BulletLabel>선결제 스케쥴 설정</BulletLabel>
          <PopoverSimple
            triggerContent={popoverData['rule'].triggerContent}
            content={popoverData['rule'].content}
          />
        </div>

        <Descriptions column={1} bordered>
          <Descriptions.Item label={<span className="w-[200px]">일 최대 충전 한도</span>}>
            <span>1일 1회</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">최초 충전 금액 설정</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">일 최대 충전 한도</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="flex justify-center gap-4 py-5">
        <Button className="w-[150px]" onClick={onSubmit}>
          신청
        </Button>
        <Button variant="cancel" className="w-[150px]" onClick={onCancel}>
          취소
        </Button>
      </div>
    </section>
  );
};

export default ViewCreate;

type PopoverData = {
  triggerContent: React.ReactNode;
  content: React.ReactNode;
};
type PopoverDataKey = 'rule' | 'prepayment';
const popoverData: Record<PopoverDataKey, PopoverData> = {
  rule: {
    triggerContent: <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer" />,
    content: (
      <div className="flex flex-start gap-2">
        <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer mt-1" />
        <p>입력된 ROAS를 기준으로, 기준 이상이면 충전 금액을 증액하고, 기준 미만이면 감액합니다</p>
      </div>
    ),
  },
  prepayment: {
    triggerContent: <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer" />,
    content: (
      <div className="flex flex-start gap-2">
        <IconBadge name="CircleHelp" bgColor="#F6BE2C" className="cursor-pointer mt-1" />
        <p>
          입력한 최초 충전 금액을 기준으로 충전 금액을 자동으로 증액하거나 감액하며, 일 최대 예산을
          초과하여 충전하지 않습니다.
        </p>
      </div>
    ),
  },
};
