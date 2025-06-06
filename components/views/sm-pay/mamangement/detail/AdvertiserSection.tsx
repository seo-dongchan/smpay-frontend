import AdvertiserDesc from '@/components/common/sm-pay/AdvertiserDesc';
import { BulletLabel } from '@/components/composite/label';

const AdvertiserSection = () => {
  return (
    <section className="mt-4">
      <BulletLabel labelClassName="text-base pb-2">광고주 기본 정보</BulletLabel>
      <AdvertiserDesc />
    </section>
  );
};

export default AdvertiserSection;
