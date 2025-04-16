'use client';

import { useState } from 'react';

import ContentHeader from '@/components/common/ContentHeader';

import { TabSwitch } from '@/components/ui/tab-switch';
import AdvertiserSection from './AdvertiserSection';
import LicenseSection from './LicenseSection';

import { BulletLabel } from '@/components/composite/label';

const NaverServiceView = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <ContentHeader title="API 라이선스 등록" items={[]} />

      <BulletLabel className="mt-6 mb-8" labelClassName="text-base">
        정보 등록 방법을 선택해주세요.
      </BulletLabel>
      <TabSwitch
        className="mt-2"
        value={value}
        onValueChange={setValue}
        leftLabel="API 라이선스 등록"
        rightLabel="광고주 등록"
      />
      {!value && <LicenseSection />}
      {value && <AdvertiserSection />}
    </div>
  );
};

export default NaverServiceView;
