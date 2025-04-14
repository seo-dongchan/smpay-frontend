'use client';

import { useState } from 'react';
import { Table, type TableProps } from 'antd';
import type { SortOrder, FilterValue } from 'antd/es/table/interface';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { type MemberData, mockMemberData } from './constant';

interface TableParams {
  pagination?: {
    current: number;
    pageSize: number;
  };
  sortField?: string;
  sortOrder?: SortOrder;
  filters?: Record<string, FilterValue | null>;
}

const columns: TableProps<MemberData>['columns'] = [
  {
    title: 'No',
    dataIndex: 'no',
    align: 'center',
    sorter: true,
  },
  {
    title: '계정유형',
    dataIndex: 'accountType',
    sorter: true,
    align: 'center',
  },
  {
    title: '대행사명',
    dataIndex: 'companyName',
    sorter: true,
    align: 'center',
  },
  {
    title: '대표자명',
    dataIndex: 'name',
    sorter: true,
    align: 'center',
  },
  {
    title: '이메일(ID)',
    dataIndex: 'email',
    sorter: true,
    align: 'center',
  },
  {
    title: '정보 수정',
    dataIndex: 'action',
    align: 'center',
    render: () => <Button variant="cancel">정보 수정</Button>,
  },
  {
    title: '활성여부',
    dataIndex: 'status',
    sorter: true,
    align: 'center',
    render: (value, record) => {
      const selectedValue = value === '정상' ? 'active' : 'inactive';

      return (
        <Select
          value={selectedValue}
          onValueChange={(newValue) => {
            console.log(`id: ${record.no}, 변경된 값: ${newValue}`);
            // 상태 업데이트 로직을 이곳에 작성 (예: API 호출 등)
          }}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="선택">{value}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">정상</SelectItem>
            <SelectItem value="inactive">비활성</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    title: '가입일',
    dataIndex: 'createdAt',
    sorter: true,
    align: 'center',
  },
];

const TableSection = () => {
  const [data, setData] = useState<MemberData[]>(mockMemberData);

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  console.log('data', data);

  const handleTableChange: TableProps<MemberData>['onChange'] = (pagination, filters, sorter) => {
    setTableParams({
      pagination: {
        current: pagination.current ?? 1,
        pageSize: pagination.pageSize ?? 10,
      },
      filters,
      sortField: !Array.isArray(sorter) ? String(sorter.field) : undefined,
      sortOrder: !Array.isArray(sorter) ? sorter.order : undefined,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table<MemberData>
      columns={columns}
      rowKey={(record) => record.no}
      dataSource={data}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
    />
  );
};

export default TableSection;
