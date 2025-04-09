'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { TableProps } from 'antd';

import { Button, LinkTextButton } from '@/components/ui/button';
import CustomTable from '@/components/composite/table';
import { ConfirmDialog } from '@/components/composite/modal';

import RejectModal from './modal/RejectModal';
import StopInfoModal from './modal/StopInfoModal';
import { dialogContent, type DialogStatus } from './constants';

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
  const router = useRouter();

  const [dataSource] = useState<SmPayData[]>(mockData);

  const [openDialog, setOpenDialog] = useState<DialogStatus | null>(null);
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(false);
  const [openStopModal, setOpenStopModal] = useState<boolean>(false);

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
          return <LinkTextButton onClick={() => setOpenRejectModal(true)}>{value}</LinkTextButton>;
        }

        if (value === '일시중지') {
          return <LinkTextButton onClick={() => setOpenStopModal(true)}>{value}</LinkTextButton>;
        }

        return <span>{value}</span>;
      },
    },

    {
      title: '기능',
      dataIndex: 'action',
      align: 'center',
      render: (_, record) => (
        // TODO : 각 상태 종목에 따른 버튼 노출이 다름
        <div className="flex items-center gap-2">
          <Button
            variant="greenOutline"
            onClick={() => router.push(`/sm-pay/management/${record.id}`)}
          >
            조회
          </Button>

          <Button variant="blueOutline" onClick={() => setOpenDialog('resend')}>
            재발송
          </Button>
          <Button variant="blueOutline" onClick={() => setOpenDialog('resumption')}>
            재개
          </Button>
          <Button variant="blueOutline" onClick={() => setOpenDialog('request')}>
            심사 요청
          </Button>

          <Button variant="redOutline" onClick={() => setOpenDialog('terminate')}>
            해지
          </Button>
          <Button variant="redOutline" onClick={() => setOpenDialog('stop')}>
            일시 중지
          </Button>
          <Button variant="redOutline" onClick={() => setOpenDialog('cancel')}>
            신청 취소
          </Button>
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
    <section>
      {openDialog && (
        <ConfirmDialog
          open
          onClose={() => setOpenDialog(null)}
          content={dialogContent[openDialog].content}
        />
      )}

      <RejectModal open={openRejectModal} onClose={() => setOpenRejectModal(false)} />
      <StopInfoModal open={openStopModal} onClose={() => setOpenStopModal(false)} />

      <CustomTable<SmPayData> columns={columns} dataSource={dataSource} total={dataSource.length} />
    </section>
  );
};

export default SmPayTable;
