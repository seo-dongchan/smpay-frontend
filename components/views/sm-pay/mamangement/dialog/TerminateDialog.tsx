import { Dialog, type ModalProps } from '@/components/composite/modal';

const TerminateDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>SM Pay 서비스를 해지 하시겠습니까?</p>
          <p>해당 광고주는 미수금이 남아 있어, 미수금 회수 완료 후 해지 처리됩니다.</p>
        </div>
      }
    />
  );
};

export default TerminateDialog;
