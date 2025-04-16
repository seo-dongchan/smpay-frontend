'use client';

import { useState } from 'react';

import ViewList from './ViewList';
import ViewCreate from './ViewCreate';
import GuidSection, { type ViewType } from '@/components/common/sm-pay/GuideSection';

const SmPayApplyView = () => {
  const [viewType, setViewType] = useState<ViewType>('list');

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
