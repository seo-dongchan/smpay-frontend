import { Dialog, type ModalProps } from '@/components/composite/modal';

/**
 * TODO : 공통 다이어그램 용도로 사용 - 추후 내부에 있는 다이어그램을 하나의 컴포넌트로 활요할 것
 */
const CommonDialog = ({ open, onClose, onConfirm }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title="다이아로그는 재사용이 가능할 듯"
    />
  );
};

export default CommonDialog;
