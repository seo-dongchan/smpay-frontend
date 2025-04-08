import { BulletLabel } from '@/components/composite/label';
import { SearchInput } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchBox } from '@/components/common/Box';
import CustomTable from '@/components/composite/table';
import { useState } from 'react';
import { TableProps } from 'antd';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const statusList = [
  '신청 가능',
  '광고주 동의 요청',
  '광고주 동의 기한 만료',
  '광고주 동의 완료',
  '신청 취소',
  '심사 요청',
  '심사 승인',
  '심사 거절',
];

type AdvertiserData = {
  id: number;
  advertiserId: number;
  advertiserName: string;
  businessName: string;
  status: string;
  createdAt: string;
  owner: string;
  bussiness_num: string;
};

const mockData: AdvertiserData[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  advertiserId: i + 1,
  advertiserName: `광고주 ${i + 1}`,
  businessName: `사업자 ${i + 1}`,
  status: statusList[i % statusList.length],
  createdAt: new Date().toISOString().slice(0, 10),
  owner: `대표자 ${i + 1}`,
  bussiness_num: `사업자 등록 번호 ${i + 1}`,
}));

const ListView = () => {
  const [dataSource] = useState<AdvertiserData[]>(mockData);
  const [selectedRowKey, setSelectedRowKey] = useState<string | number | null>(null);

  const columns: TableProps<AdvertiserData>['columns'] = [
    {
      title: 'No',
      dataIndex: 'id',
      align: 'center',
      width: '100px',
      render: (_, record: AdvertiserData) => (
        <RadioGroup
          value={selectedRowKey?.toString()}
          onValueChange={() => setSelectedRowKey(record.id)}
        >
          <RadioGroupItem value={record.id.toString()} />
        </RadioGroup>
      ),
    },

    {
      title: '대표자명',
      dataIndex: 'owner',
      align: 'center',
      sorter: (a, b) => a.owner.localeCompare(b.owner),
    },
    {
      title: '사업자 등록 번호',
      dataIndex: 'bussiness_num',
      align: 'center',
      sorter: (a, b) => a.bussiness_num.localeCompare(b.bussiness_num),
    },

    {
      title: '사업자명',
      dataIndex: 'businessName',
      align: 'center',
      sorter: (a, b) => a.businessName.localeCompare(b.businessName),
    },
    {
      title: '상태',
      dataIndex: 'status',
      align: 'center',
      sorter: (a, b) => Number(b.status) - Number(a.status),
    },
    {
      title: '최종 수정 일시',
      dataIndex: 'createdAt',
      align: 'center',
      sorter: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    },
  ];

  return (
    <section>
      <div>
        <BulletLabel>광고주 검색</BulletLabel>
        <SearchBox className="gap-2">
          <SearchInput className="w-[425px]" />
          <Button>검색</Button>
        </SearchBox>
      </div>

      <div>
        <BulletLabel>광고주 등로</BulletLabel>
        <CustomTable<AdvertiserData>
          columns={columns}
          dataSource={dataSource}
          total={dataSource.length}
        />
      </div>

      <div className="flex justify-center gap-4">
        <Button className="w-[150px]">신청</Button>
        <Button variant="cancel" className="w-[150px]">
          취소
        </Button>
      </div>
    </section>
  );
};

export default ListView;
