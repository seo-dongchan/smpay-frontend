import { Descriptions } from 'antd';

import { BulletLabel } from '@/components/composite/label';
import { CircleCheckBig, X } from 'lucide-react';

const StandardSection = () => {
  return (
    <section>
      <BulletLabel labelClassName="text-base">기준 설정</BulletLabel>
      <Descriptions bordered column={1} styles={{ label: { width: 200 } }}>
        <Descriptions.Item
          label={<span className="font-bold">매출 계좌 보유 잔액</span>}
          styles={{ content: { backgroundColor: '#EAECF0' } }}
        >
          <div className="flex items-center gap-4 font-bold">
            30,000,000원 <CircleCheckBig color="#34C759" />
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          label={<span className="font-bold">광괴 운영 기간</span>}
          styles={{ content: { backgroundColor: '#FCECEC' } }}
        >
          <div className="flex items-center gap-4 font-bold">
            1개월 24일 <X color="#FF3B30" />
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          styles={{ content: { backgroundColor: '#EAECF0' } }}
          label={<span className="font-bold">일 평균 ROAS</span>}
        >
          <div className="flex items-center gap-4 font-bold">
            425% <CircleCheckBig color="#34C759" />
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          label={<span className="font-bold">일 평균 전환매출</span>}
          styles={{ content: { backgroundColor: '#FCECEC' } }}
        >
          <div className="flex items-center gap-4 font-bold">
            9,256,000원 <CircleCheckBig color="#34C759" />
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          styles={{ content: { backgroundColor: '#EAECF0' } }}
          label={<span className="font-bold">일 평균 소진 광고비</span>}
        >
          <div className="flex items-center gap-4 font-bold">
            1,200,000원 <X color="#FF3B30" />
          </div>
        </Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default StandardSection;
