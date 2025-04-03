'use client';

import { Badge, Button, Descriptions, Form, Input } from 'antd';

import { SectionLabel } from '@/components/composite/section-label';
import { Label } from '@/components/ui/label';

const InsertSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('✅ 제출된 값:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.warn('❌ 유효성 검사 실패:', errorInfo);
  };

  return (
    <section className="my-4">
      <SectionLabel>대행사 정보</SectionLabel>

      <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Descriptions
          bordered
          column={3}
          items={[
            {
              key: 'agency',
              label: <Label className="font-bold text-sm">대행사명 *</Label>,
              children: (
                <Form.Item name="agency" noStyle>
                  <Input placeholder="대행사명을 입력해주세요." />
                </Form.Item>
              ),
              span: 3,
            },
            {
              key: 'product',
              label: 'Product',
              children: 'Cloud Database',
            },
            {
              key: 'status',
              label: 'Status',
              children: <Badge status="processing" text="Running" />,
            },
            {
              key: 'date',
              label: 'Order Time',
              children: (
                <Form.Item
                  name="orderTime"
                  noStyle
                  //   rules={[{ required: true, message: '날짜를 입력해주세요.' }]}
                >
                  <Input placeholder="YYYY-MM-DD" />
                </Form.Item>
              ),
            },
          ]}
        />

        <div className="mt-4 text-right">
          <Button type="primary" htmlType="submit">
            제출
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default InsertSection;
