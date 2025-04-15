import { Modal, type ModalProps } from '@/components/composite/modal';
import { Descriptions } from 'antd';

const StopInfoModal = ({ open = false, onClose, onConfirm }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title="광고주 보류"
      confirmText="상세보기"
      cancelText="취소"
    >
      <div className="min-w-[900px]">
        <p>다음과 같은 사유로 일시중지되었습니다.</p>
        <div className="mt-4 rounded-md bg-white">
          <Descriptions column={1} bordered>
            <Descriptions.Item label="보류 일시">2024-01-15 02:12</Descriptions.Item>
            <Descriptions.Item label="보류 사유">관리 권한 해제 / 관리자 중단</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Modal>
  );
};

export default StopInfoModal;
