'use client';
import { useState } from 'react';

import MailSendSection from './MailSendSection';
import DirectRegistSection from './DirectRegistSection';
import { BulletLabel } from '@/components/composite/label';
import { TabSwitch } from '@/components/ui/tab-switch';
const MemberManagementView = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <BulletLabel labelClassName="text-base">회원 등록 방식</BulletLabel>
      <TabSwitch
        className="mt-2"
        value={value}
        onValueChange={setValue}
        leftLabel="초대 메일 발송"
        rightLabel="직접 등록"
      />
      {!value && <MailSendSection />}
      {value && <DirectRegistSection />}
    </div>
  );
};

export default MemberManagementView;
