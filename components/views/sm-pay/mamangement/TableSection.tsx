'use client';

import { useState } from 'react';
import { Table, type TableProps } from 'antd';
import { Button, LinkTextButton } from '@/components/ui/button';

const statusList = [
  '광고주 동의 요청',
  '광고주 미동의',
  '광고주 동의기한 만료',
  '광고주 동의 완료',
  '심사 대기',
  '심사 승인',
  '반려',
  '일시중지',
  '해지 신청 진행',
  '해지',
];

interface SmPayData {
  id: number;
  owner: string;
  accountId: string;
  accountName: string;
  businessName: string;
  bussiness_num: string;
  status: string;
  createdAt: string;
}

const mockData: SmPayData[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  owner: `대표자 ${i + 1}`,
  accountId: `account_${i + 1}`,
  accountName: `계좌명 ${i + 1}`,
  businessName: `사업자 ${i + 1}`,
  bussiness_num: `110-22-33${i.toString().padStart(2, '0')}`,
  status: statusList[i % statusList.length], // 10개 순환
  createdAt: new Date().toISOString().slice(0, 10),
}));

const SmPayTable = () => {
  const [dataSource] = useState<SmPayData[]>(mockData);

  const columns: TableProps<SmPayData>['columns'] = [
    {
      title: 'No',
      dataIndex: 'id',
      align: 'center',
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
      render: (value) => <LinkTextButton>{value}</LinkTextButton>,
    },

    {
      title: '활성여부',
      dataIndex: 'status',
      align: 'center',
      sorter: (a, b) => Number(b.status) - Number(a.status),
      render: (value) => {
        if (value === '반려') {
          return <LinkTextButton onClick={() => {}}>{value}</LinkTextButton>;
        }

        if (value === '일시중지') {
          return <LinkTextButton onClick={() => {}}>{value}</LinkTextButton>;
        }

        return <span>{value}</span>;
      },
      // 반려 : 링크, 일시중지 : 링크 클릭
    },

    {
      title: '기능',
      dataIndex: 'action',
      align: 'center',
      render: () => (
        <div className="flex items-center gap-2">
          <Button variant="greenOutline">조회</Button>
          <Button variant="redOutline">일시 중지</Button>
          <Button variant="redOutline">해지</Button>
        </div>
      ),
    },

    {
      title: '가입일',
      dataIndex: 'createdAt',
      align: 'center',
      sorter: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    },
  ];

  return (
    <Table<SmPayData>
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default SmPayTable;
