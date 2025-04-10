'use client';

import { useParams } from 'next/navigation';

const SMPayChargeView = () => {
  const params = useParams();
  const advertiserId = params.advertiserId as string;
  console.log(advertiserId);

  return <div>ChargeCount</div>;
};

export default SMPayChargeView;
