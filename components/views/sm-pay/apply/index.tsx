'use client';

import { useState } from 'react';
import GuidSection from './GuidSection';
import ListView from './ListView';

const SmPayApplyView = () => {
  const [viewType] = useState<ViewType>('test1');

  return (
    <div>
      <GuidSection>{GUID_CONTENT[viewType]}</GuidSection>
      <ListView />
    </div>
  );
};

export default SmPayApplyView;

type ViewType = 'test1' | 'test2';

const GUID_CONTENT: Record<string, React.ReactNode> = {
  test1: (
    <div className="font-normal text-base text-[#363C45]">
      <p>광고주의 광고 성과를 분석하여 자동 선결제의 기준 ROAS와 충전 금액을 설정할 수 있습니다.</p>
      <p>
        SM Pay 신청시 작성하신 기준 ROAS에 도달하면 광고비를 증액하고, 기준 ROAS에서 떨어지면
        감액하여 효율적인 예산 운영이 가능합니다.
      </p>
    </div>
  ),
  test2: (
    <div className="font-normal text-base text-[#363C45]">
      <p>광고주의 광고 성과를 분석하여 자동 선결제의 기준 ROAS와 충전 금액을 설정할 수 있습니다.</p>
    </div>
  ),
};
