'use client';

import Title from '@/components/common/no-nav/Title';
import { BulletLabel } from '@/components/composite/label';
import { PhoneInput } from '@/components/ui/input';
import { Descriptions } from 'antd';
import { useState } from 'react';

const MembershipView = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="w-full max-w-[1024px] h-screen flex flex-col gap-5 mx-auto mt-10">
      <Title />
      <div className="mx-auto text-center text-[#545F71]  font-extrabold">
        <p>SM Pay를 이용해주셔서 감사합니다.</p>
        <p>비밀번호를 설정하고 회원가입을 완료해주세요.</p>
      </div>
      <div className="space-y-1">
        <BulletLabel labelClassName="text-base">회원 정보</BulletLabel>
        <Descriptions
          bordered
          column={1}
          size="middle"
          labelStyle={{
            width: '200px',
            background: '#f9fafb',
            fontWeight: 'normal',
          }}
          contentStyle={{
            background: 'white',
          }}
        >
          <Descriptions.Item label="대행사명">주식회사 씨차례</Descriptions.Item>

          <Descriptions.Item label="회원 구분">그룹장</Descriptions.Item>

          <Descriptions.Item label="성명">홍길동</Descriptions.Item>

          <Descriptions.Item label="부서명">마케팅 기획실</Descriptions.Item>

          <Descriptions.Item label="이메일 주소">name@company.com</Descriptions.Item>
        </Descriptions>
        <p className="text-gray-500 text-sm h-[60px] bg-[#f9fafb] flex items-center rounded mt-2 px-4">
          * 가입 시 입력한 이메일 주소의 아이디 부분이 사이트에서 ID로 사용됩니다.
        </p>
        <Descriptions
          bordered
          column={1}
          size="middle"
          labelStyle={{
            width: '200px',
            background: '#f9fafb',
            fontWeight: 'normal',
          }}
          contentStyle={{
            background: 'white',
          }}
        >
          <Descriptions.Item label="비밀번호 *">주식회사 씨차례</Descriptions.Item>

          <Descriptions.Item label="비밀번호 확인 *">그룹장</Descriptions.Item>

          <Descriptions.Item label="연락처">
            <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Descriptions.Item>
        </Descriptions>{' '}
      </div>
    </div>
  );
};

export default MembershipView;
