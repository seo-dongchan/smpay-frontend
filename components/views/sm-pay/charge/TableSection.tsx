import { SquareCheckBig, SquareX } from 'lucide-react';

import { LinkTextButton } from '@/components/ui/button';
import CustomTable from '@/components/composite/table';

import { MOCK_DATA, type TransactionData } from './constants';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<TransactionData> = [
  {
    title: '대행사',
    dataIndex: 'agency',
    onCell: (_, index) => {
      if (index !== undefined && index % 4 === 0) {
        return { rowSpan: 4 };
      }
      return { rowSpan: 0 };
    },
  },
  {
    title: '그룹원',
    dataIndex: 'group',
    onCell: (_, index) => {
      if (index !== undefined && index % 2 === 0) {
        return { rowSpan: 2 };
      }
      return { rowSpan: 0 };
    },
  },
  {
    title: '광고주',
    dataIndex: 'advertiser',
    onCell: (_, index) => {
      if (index !== undefined && index % 2 === 0) {
        return { rowSpan: 2 };
      }
      return { rowSpan: 0 };
    },
  },
  {
    title: '거래일자',
    width: 200,
    dataIndex: 'date',
  },
  {
    title: '거래번호',
    dataIndex: 'txId',
    render: (value) => <LinkTextButton>{value}</LinkTextButton>,
  },
  {
    title: '거래유형',
    dataIndex: 'txType',
    render: (value) => (
      <span className={value === '충전' ? 'text-blue-600' : 'text-green-600'}>{value}</span>
    ),
  },
  {
    title: '은행',
    dataIndex: 'bank',
  },
  {
    title: '계좌번호',
    width: 150,
    dataIndex: 'account',
  },
  {
    title: '예금주',
    dataIndex: 'depositor',
  },
  {
    title: '금액',
    dataIndex: 'amount',
    render: (value) => value.toLocaleString(),
  },
  {
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
    title: '상환일자',
    dataIndex: 'repaymentDate',
    width: 200,
  },
  {
    title: '상환상태',
    dataIndex: 'repaymentStatus',
    fixed: 'right',
    render: (value) => (
      <>
        {value === 'success' ? (
          <SquareCheckBig className="text-[#34C759]" />
        ) : (
          <SquareX className="text-red-500" />
        )}
      </>
    ),
  },
];

const TableSection: React.FC = () => {
  return (
    <CustomTable<TransactionData>
      columns={columns}
      dataSource={MOCK_DATA}
      total={MOCK_DATA.length}
      scroll={{ x: 2000 }}
      style={{ maxWidth: '1100px' }}
    />
  );
};

export default TableSection;
