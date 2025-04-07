import { Dialog, type ModalProps } from '@/components/composite/modal';

const ResumptionDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title={
        <div className="flex flex-col items-center pb-4 font-medium">
          <p>SM Pay 서비스를 다시 시작하게 하시겠습니까?</p>
        </div>
      }
    />
  );
};

export default ResumptionDialog;
