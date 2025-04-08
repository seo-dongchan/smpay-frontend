'use client';

import { useEffect, useState } from 'react';
import GuidSection, { type ViewType } from './GuidSection';
import ViewList from './ViewList';
import ViewCreate from './ViewCreate';

const SmPayApplyView = () => {
  const [viewType, setViewType] = useState<ViewType>('list');

  useEffect(() => {
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
