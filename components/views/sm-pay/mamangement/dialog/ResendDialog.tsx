import { Dialog, type ModalProps } from '@/components/composite/modal';

const ResendDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>광고주의 동의 요청을 재발송 하시겠습니까?</p>
        </div>
      }
    />
  );
};

export default ResendDialog;
