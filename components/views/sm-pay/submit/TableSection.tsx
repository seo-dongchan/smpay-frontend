'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Table, Tag } from 'antd';

import { LinkTextButton } from '@/components/ui/button';

import RejectModal from './modal/RejectModal';
import StopInfoModal from './modal/StopInfoModal';
import { mockSmPayData, SmPaySubmitData } from './constants';

import type { ColumnsType } from 'antd/es/table';

const TableSection = () => {
  const router = useRouter();

  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isStopModalOpen, setIsStopModalOpen] = useState(false);

  const columns: ColumnsType<SmPaySubmitData> = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 70,
    },
    {
      title: '대행사명',
      dataIndex: 'agencyName',
      key: 'agencyName',
    },
    {
      title: '담당자명',
      dataIndex: 'departmentName',
      key: 'departmentName',
    },
    {
      title: 'CUSTOMER ID',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: '광고주 로그인 ID',
      dataIndex: 'advertiserId',
      key: 'advertiserId',
      align: 'center',
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <span>{text}</span>
          {record.advertiserStatus === 'new' && <Tag color="orange">new</Tag>}
        </div>
      ),
    },
    {
      title: '사업자명',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '광고주 닉네임',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status: string) => {
        // const colorMap: Record<string, string> = {
        //   '심사 요청': 'processing',
        //   승인: 'success',
        //   반려: 'error',
        //   일시중지: 'warning',
        //   해지: 'default',
        // };

        if (status === '심사 요청' || status === '승인' || status === '해지') {
          return <span>{status}</span>;
        }

        if (status === '반려') {
          return (
            <LinkTextButton onClick={() => setIsRejectModalOpen(true)}>{status}</LinkTextButton>
          );
        }
        if (status === '일시중지') {
          return <LinkTextButton onClick={() => setIsStopModalOpen(true)}>{status}</LinkTextButton>;
        }
      },
    },
    {
      title: '최종 수정 일시',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      align: 'center',
    },
  ];

  return (
    <section>
      {isRejectModalOpen && (
        <RejectModal
          open={isRejectModalOpen}
          onClose={() => setIsRejectModalOpen(false)}
          onConfirm={() => router.push('/sm-pay/submit/1')}
        />
      )}
      {isStopModalOpen && (
        <StopInfoModal
          open={isStopModalOpen}
          onClose={() => setIsStopModalOpen(false)}
          onConfirm={() => router.push('/sm-pay/submit/1')}
        />
      )}
      <Table
        columns={columns}
        dataSource={mockSmPayData}
        pagination={{
          total: mockSmPayData.length,
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
        }}
      />
    </section>
  );
};

export default TableSection;
