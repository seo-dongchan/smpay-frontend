import { useState } from 'react';
import { Descriptions } from 'antd';

import { BulletLabel } from '@/components/composite/label';
import { Button } from '@/components/ui/button';
import { Input, PhoneInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { RadioGroup } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DirectRegistSection = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="py-4">
      <BulletLabel className="mb-4" labelClassName="text-base">
        회원 정보
      </BulletLabel>
      <Descriptions column={1} bordered>
        <Descriptions.Item
          labelStyle={{ width: 200 }} // 원하는 너비로 조절
          label={<span className={descLabelClassName}>부서 선택 *</span>}
        >
          <Select>
            <SelectTrigger className="w-[500px]">
              <SelectValue placeholder="구분 : 일별조회" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>회원 구분 *</span>}>
          <RadioGroup defaultValue="percent" className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <RadioGroupItem value="percent" id="above-percent" />
              <Label htmlFor="above-percent">그룹장</Label>
            </div>
            <div className="flex items-center gap-1">
              <RadioGroupItem value="fixed" id="above-fixed" />
              <Label htmlFor="above-fixed">그룹원</Label>
            </div>
          </RadioGroup>
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>성명 *</span>}>
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>이메일 주소 *</span>}>
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
      </Descriptions>

      <div className="bg-[rgba(0,0,0,0.02)] h-[70px] flex items-center px-4 my-2">
        <p className="text-[#656C7B] text-base font-medium">
          * 가입 시 입력한 이메일 주소의 아이디 부분이 사이트에서 ID로 사용됩니다.
        </p>
      </div>

      <Descriptions column={1} bordered>
        <Descriptions.Item
          labelStyle={{ width: 200 }} // 원하는 너비로 조절
          label={<span className={descLabelClassName}>비밀번호 *</span>}
        >
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>비밀번호 *</span>}>
          <Input className="max-w-[500px]" />
        </Descriptions.Item>
        <Descriptions.Item label={<span className={descLabelClassName}>연락처 *</span>}>
          <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Descriptions.Item>
      </Descriptions>

      <div className="w-full flex justify-center gap-6 py-6">
        <Button className="w-[150px]">확인</Button>
        <Button variant="cancel" className="w-[150px]">
          취소
        </Button>
      </div>
    </div>
  );
};

export default DirectRegistSection;

const descLabelClassName = 'w-[200px] font-bold';
