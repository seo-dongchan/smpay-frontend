import { Descriptions } from 'antd';
import { BulletLabel } from '@/components/composite/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { dialogContent, DialogStatus, hoverData } from './constants';
import { useState } from 'react';
import { ConfirmDialog } from '@/components/composite/modal';
import { TooltipHover } from '@/components/composite/hover-tooltip';
const InfoSection = () => {
  const [openDialog, setOpenDialog] = useState<DialogStatus | null>(null);

  // TODO 점선 컴포넌트 적용
  return (
    <section className="w-full mt-10 py-6 border-dotted border-gray-400 border-b-2 border-t-2">
      {openDialog && (
        <ConfirmDialog
          open
          onConfirm={() => setOpenDialog(null)}
          content={dialogContent[openDialog].content}
          cancelDisabled={true}
        />
      )}
      <div className="mt-4">
        <div className="flex items-center gap-4 pb-4">
          <BulletLabel labelClassName="text-base">광고주 기본 정보</BulletLabel>

          <TooltipHover
            triggerContent={hoverData['charge'].triggerContent}
            content={hoverData['charge'].content}
          />
        </div>

        <Descriptions column={1} bordered>
          <Descriptions.Item label={<span className="w-[200px]">통신 계좌 은행 *</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">충전 계좌 번호 *</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">충전 계좌 예금주명 *</span>}>
            <div className="flex gap-2">
              <Input className="max-w-[400px]" />
              <Button className="w-[100px]" onClick={() => setOpenDialog('certification')}>
                계좌 인증 하기
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-4 pb-4">
          <BulletLabel labelClassName="text-base">매출 계좌 정보 입력</BulletLabel>
          <TooltipHover
            triggerContent={hoverData['sales'].triggerContent}
            content={hoverData['sales'].content}
          />
        </div>

        <Descriptions column={1} bordered>
          <Descriptions.Item label={<span className="w-[200px]">매출 계좌 은행 *</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">매출 계좌 번호 *</span>}>
            <Input className="max-w-[500px]" />
          </Descriptions.Item>
          <Descriptions.Item label={<span className="w-[200px]">매출 계좌 예금주명 *</span>}>
            <div className="flex gap-2">
              <Input className="max-w-[400px]" />
              <Button className="w-[100px]" onClick={() => setOpenDialog('certification')}>
                계좌 인증 하기
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <Button className="text-center mt-8 w-[400px] h-[50px]" variant="cancel">
        <span className="font-bold">ARS 인증</span>
      </Button>
    </section>
  );
};

export default InfoSection;
