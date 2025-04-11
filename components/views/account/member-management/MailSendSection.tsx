import { Descriptions } from 'antd';

import { BulletLabel } from '@/components/composite/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MailSendSection = () => {
  return (
    <div className="py-4">
      <BulletLabel className="mb-4" labelClassName="text-base">
        회원 정보
      </BulletLabel>
      <Descriptions column={1} bordered>
        <Descriptions.Item
          labelStyle={{ width: 200, fontWeight: 'bold' }} // 원하는 너비로 조절
          label={<span className={descLabelClassName}>대행사 선택 *</span>}
        >
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>회원 구분 *</span>}>
          최상위 그룹 그룹장
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>성명 *</span>}>
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>발송될 이메일 주소 *</span>}>
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
      </Descriptions>

      <div className="bg-[rgba(0,0,0,0.02)] h-[70px] flex items-center px-4 mt-2">
        <p className="text-[#656C7B] text-base font-medium">
          * 가입 시 입력한 이메일 주소의 아이디 부분이 사이트에서 ID로 사용됩니다.
        </p>
      </div>

      <div className="w-full flex justify-center gap-6 py-6">
        <Button className="w-[150px]">확인</Button>
        <Button variant="cancel" className="w-[150px]">
          취소
        </Button>
      </div>
    </div>
  );
};

export default MailSendSection;

const descLabelClassName = 'w-[200px] font-bold';
