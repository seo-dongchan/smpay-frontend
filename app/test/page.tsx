import { Button } from '@/components/ui/button';
import { Descriptions } from 'antd';

const TestPage = () => {
  return (
    <div className="p-6 rounded-md bg-white shadow-md">
      <Descriptions title="사업자 정보" column={1} bordered>
        <Descriptions.Item label="사업자명">주식회사 써치엠</Descriptions.Item>
        <Descriptions.Item label="대표자명">홍길동</Descriptions.Item>
        <Descriptions.Item label="등록번호">211-88-12345</Descriptions.Item>
      </Descriptions>
      <div className="mt-4">
        <Button>Antd 버튼</Button>
      </div>
    </div>
  );
};

export default TestPage;
