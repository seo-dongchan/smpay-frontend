import { Modal, type ModalProps } from '@/components/composite/modal';
import { Descriptions } from 'antd';

const RejectModal = ({ open = false, onClose, onConfirm }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title="광고주 심사 반려"
      confirmText="상세보기"
      cancelText="닫기"
    >
      <div className="min-w-[900px]">
        <p>다음과 같은 사유로 SM Pay 서비스 심사를 반려되었습니다.</p>
        <div className="mt-4 rounded-md bg-white">
          <Descriptions column={1} bordered>
            <Descriptions.Item label="심사 반려 일시">2024-01-15 02:12</Descriptions.Item>
            <Descriptions.Item label="심사 반려 사유">
              <p>ROAS 평균값은 심사 기준치를 충족하지만,</p>
              <p>
                ROAS 변동폭이 너무 커서 선충전으로 결제를 해도 제대로 된 효율을 내기 힘들 것
                같습니다.
              </p>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Modal>
  );
};

export default RejectModal;
