import { Dialog, type ModalProps } from '@/components/composite/modal';

const RequestDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>SM Pay 심사 요청을 하시겠습니까?</p>
        </div>
      }
    />
  );
};

export default RequestDialog;
