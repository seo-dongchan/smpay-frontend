import { BulletLabel } from '@/components/composite/label';
import { Label } from '@/components/ui/label';
import { Descriptions } from 'antd';

const AdvertiserSection = () => {
  return (
    <section className="mt-4">
      <BulletLabel labelClassName="text-base">광고주 기본 정보</BulletLabel>

      <Descriptions column={1} bordered styles={{ label: { width: 200 } }}>
        <Descriptions.Item label={<span className="font-bold">사업자명</span>}>
          <Label>주식회사 카타미</Label>
        </Descriptions.Item>
        <Descriptions.Item label={<span className="font-bold">광고주 닉테임</span>}>
          <Label>carrot</Label>
        </Descriptions.Item>
        <Descriptions.Item label={<span className="font-bold">대표자명</span>}>
          <Label>김카타</Label>
        </Descriptions.Item>
        <Descriptions.Item label={<span className="font-bold">사업자 등록 번호</span>}>
          <Label>123-45-67890</Label>
        </Descriptions.Item>
        <Descriptions.Item label={<span className="font-bold">담당자 휴대폰 번호</span>}>
          <Label>010-1234-5678</Label>
        </Descriptions.Item>
        <Descriptions.Item label={<span className="font-bold">담당자 이메일 주소</span>}>
          <Label>carrot@gmail.com</Label>
        </Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default AdvertiserSection;
