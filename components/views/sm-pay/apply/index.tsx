'use client';

import { useEffect, useState } from 'react';

import ViewList from './ViewList';
import ViewCreate from './ViewCreate';
import GuidSection, { type ViewType } from '@/components/common/sm-pay/GuideSection';

const SmPayApplyView = () => {
  const [viewType, setViewType] = useState<ViewType>('list');

  useEffect(() => {
    // TODO : 스크롤 다시 변경
    const layoutContent = document.getElementById('layout-content');
    if (layoutContent) {
      layoutContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [viewType]);

  return (
    <div>
      <GuidSection viewType={viewType} />
      <ViewList
        onSubmit={() => setViewType('create')}
        onCancel={() => {}}
        display={viewType === 'list'}
      />

      <ViewCreate
        onSubmit={() => {}}
        onCancel={() => setViewType('list')}
        display={viewType === 'create'}
      />
    </div>
  );
};

export default SmPayApplyView;

export type ViewProps = {
  onSubmit: () => void;
  onCancel: () => void;
  display: boolean;
};
