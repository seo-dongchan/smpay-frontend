import { Dialog, type ModalProps } from '@/components/composite/modal';

const CancelDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>SM Pay 신청을 취소하시겠습니까?</p>
        </div>
      }
    />
  );
};

export default CancelDialog;
