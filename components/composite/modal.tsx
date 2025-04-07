import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { X } from 'lucide-react';

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string | React.ReactNode;
}

export const Dialog = ({ open = false, onClose, onConfirm, title }: ModalProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal text-base">{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="min-w-[100px] min-h-[35px] bg-[#545F71]"
            onClick={onConfirm}
          >
            확인
          </AlertDialogAction>
          <AlertDialogCancel
            className="min-w-[100px] min-h-[35px] bg-[#EEF1F4] border-[#EEF1F4]"
            onClick={onClose}
          >
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface ContentModalProps extends ModalProps {
  children?: React.ReactNode;
  width?: number | string;
  confirmText?: string;
  cancelText?: string;
}
export const ContentModal = ({
  open = false,
  children,
  title,
  onClose,
  onConfirm,
  width = 'fit-content', // ← 기본값
  confirmText = '확인',
  cancelText = '취소',
}: ContentModalProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent
        className="p-0 rounded-lg w-full"
        style={{
          maxWidth: typeof width === 'number' ? `${width}px` : width,
          minWidth: '500px',
        }}
      >
        <AlertDialogHeader className="px-8 border-b border-[#CCCCCC] py-4">
          <AlertDialogTitle className="flex justify-between items-center">
            <span>{title}</span>
            <X className="w-[22px] h-[22px] cursor-pointer" onClick={onClose} />
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="px-8 py-4">{children}</div>

        <AlertDialogFooter className="py-4 bg-[#E2E2E2] rounded-b-lg">
          <AlertDialogAction
            className="min-w-[150px] min-h-[35px] bg-[#545F71]"
            onClick={onConfirm}
          >
            {confirmText}
          </AlertDialogAction>
          <AlertDialogCancel
            className="min-w-[150px] min-h-[35px] bg-[#EEF1F4] border-[#EEF1F4]"
            onClick={onClose}
          >
            {cancelText}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
