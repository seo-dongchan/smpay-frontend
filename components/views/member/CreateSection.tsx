'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Descriptions } from 'antd';
import { Badge } from 'antd';

import { SectionLabel } from '@/components/composite/section-label';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';

// 💡 유효성 검사 스키마
const formSchema = z.object({
  agency: z.string().min(1, '대행사명을 입력해주세요.'),
  orderTime: z.string().min(1, '주문일을 입력해주세요.'),
});

const CreateSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agency: '',
      orderTime: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('✅ 제출 값:', values);
  };

  return (
    <section className="my-4">
      <SectionLabel>회원 정보</SectionLabel>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Descriptions
            bordered
            column={3}
            items={[
              {
                key: 'agency',
                label: <Label className="font-bold text-sm">대행사명 *</Label>,
                span: 3,
                children: (
                  <FormField
                    control={form.control}
                    name="agency"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="대행사명을 입력해주세요." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ),
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
                key: 'orderTime',
                label: 'Order Time',
                children: (
                  <FormField
                    control={form.control}
                    name="orderTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="YYYY-MM-DD" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ),
              },
            ]}
          />

          <div className="text-right">
            <Button type="submit">제출</Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateSection;
