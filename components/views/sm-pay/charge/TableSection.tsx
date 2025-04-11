import { useMemo, useState } from 'react';
import { SquareCheckBig, SquareX } from 'lucide-react';

import Table from '@/components/composite/table';
import { LinkTextButton } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useSidebar } from '@/components/ui/sidebar';

import { useWindowSize } from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';

import { MOCK_DATA, type TransactionData } from './constants';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<TransactionData> = [
  {
    key: 'agency',
    title: '대행사',
    dataIndex: 'agency',
    onCell: (_, index) => {
      if (index !== undefined && index % 4 === 0) return { rowSpan: 4 };
      return { rowSpan: 0 };
    },
  },
  {
    key: 'group',
    title: '그룹원',
    dataIndex: 'group',
    onCell: (_, index) => {
      if (index !== undefined && index % 2 === 0) return { rowSpan: 2 };
      return { rowSpan: 0 };
    },
  },
  {
    key: 'advertiser',
    title: '광고주',
    dataIndex: 'advertiser',
    onCell: (_, index) => {
      if (index !== undefined && index % 2 === 0) return { rowSpan: 2 };
      return { rowSpan: 0 };
    },
  },
  {
    key: 'date',
    title: '거래일자',
    width: 200,
    dataIndex: 'date',
  },
  {
    key: 'txId',
    title: '거래번호',
    dataIndex: 'txId',
    render: (value) => <LinkTextButton>{value}</LinkTextButton>,
  },
  {
    key: 'txType',
    title: '거래유형',
    dataIndex: 'txType',
    render: (value) => (
      <span className={value === '충전' ? 'text-blue-600' : 'text-green-600'}>{value}</span>
    ),
  },
  {
    key: 'bank',
    title: '은행',
    dataIndex: 'bank',
  },
  {
    key: 'account',
    title: '계좌번호',
    width: 150,
    dataIndex: 'account',
  },
  {
    key: 'depositor',
    title: '예금주',
    dataIndex: 'depositor',
  },
  {
    key: 'amount',
    title: '금액',
    dataIndex: 'amount',
    render: (value) => value.toLocaleString(),
  },
  {
    key: 'diffAmount',
    title: '이전대비 변화액',
    dataIndex: 'diffAmount',
    width: 150,
    render: (value) => (
      <span className={value < 0 ? 'text-red-500' : 'text-blue-500'}>
        {value > 0 ? '+' : ''}
        {value.toLocaleString()}
      </span>
    ),
  },
  {
    key: 'diffRate',
    title: '이전대비 변화율',
    width: 150,
    dataIndex: 'diffRate',
    render: (value) => (
      <span className={value < 0 ? 'text-red-500' : 'text-blue-500'}>
        {value > 0 ? '+' : ''}
        {value}%
      </span>
    ),
  },
  {
    key: 'repaymentDate',
    title: '상환일자',
    dataIndex: 'repaymentDate',
    width: 200,
  },
  {
    key: 'repaymentStatus',
    title: '상환상태',
    dataIndex: 'repaymentStatus',
    fixed: 'right',
    render: (value) =>
      value === 'success' ? (
        <SquareCheckBig className="text-[#34C759]" />
      ) : (
        <SquareX className="text-red-500" />
      ),
  },
];

const defaultCheckedList = columns.map((item) => item.key);

const TableSection: React.FC = () => {
  const { width } = useWindowSize();
  const { state } = useSidebar();

  const [checkedList, setCheckedList] = useState(defaultCheckedList || []);

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  const tableWidthClass = useMemo(() => {
    // expanded 1440 -> 1100px
    if (state === 'expanded' && width <= 1440) {
      return 'max-w-[1100px]';
    }

    // collapsed 1440 -> 1330px
    if (state === 'collapsed' && width <= 1440) {
      return 'max-w-[1330px]';
    }

    return 'w-full';
  }, [width, state]);

  return (
    <div className={cn(tableWidthClass, 'overflow-x-auto')}>
      <div className="flex flex-wrap gap-4 p-2 py-4 mb-2">
        {columns
          .filter((col) => col.key !== 'repaymentStatus')
          .map((item) => (
            <div key={item.key} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox
                checked={checkedList.includes(item.key as string)}
                onCheckedChange={(checked) => {
                  setCheckedList((prev) =>
                    checked
                      ? [...prev, item.key as string]
                      : prev.filter((key) => key !== item.key),
                  );
                }}
              />
              <Label htmlFor="terms"> {item.title?.toString()}</Label>
            </div>
          ))}
      </div>

      <Table<TransactionData>
        columns={newColumns}
        dataSource={MOCK_DATA}
        total={MOCK_DATA.length}
        scroll={{ x: 2000 }}
      />
    </div>
  );
};

export default TableSection;
