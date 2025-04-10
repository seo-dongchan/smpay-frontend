'use client';

import { useParams } from 'next/navigation';
import FilterSection from './FilterSection';
import TableSection from './TableSection';

const SMPayChargeView = () => {
  const params = useParams();

  const advertiserId = params.advertiserId as string;
  console.log(advertiserId);

  return (
    <div>
      <FilterSection />
      <TableSection />
    </div>
  );
};

export default SMPayChargeView;
