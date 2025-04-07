import { Dialog, type ModalProps } from '@/components/composite/modal';

const ConfirmDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>SM Pay 심사 요청이 완료하였습니다.</p>
        </div>
      }
    />
  );
};

export default ConfirmDialog;
