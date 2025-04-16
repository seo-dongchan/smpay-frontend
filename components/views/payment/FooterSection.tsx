import { useState } from 'react';
import Copyright from '@/components/layout/Copyright';
import { ConfirmDialog } from '@/components/composite/modal';
import { Button } from '@/components/ui/button';
import { dialogContent, DialogStatus } from './constants';

const FooterSection = () => {
  const [openDialog, setOpenDialog] = useState<DialogStatus | null>(null);

  return (
    <section className="w-full pt-[20px] pb-[100px]">
      {openDialog && (
        <ConfirmDialog
          open
          onConfirm={() => setOpenDialog(null)}
          content={dialogContent[openDialog].content}
          cancelDisabled={true}
        />
      )}
      <div className="flex justify-center gap-4 pt-4">
        <Button className="w-[150px]" onClick={() => setOpenDialog('submit')}>
          신청
        </Button>
        <Button variant="cancel" className="w-[150px]" onClick={() => {}}>
          취소
        </Button>
      </div>
      <Copyright className="py-[50px]" />
    </section>
  );
};

export default FooterSection;
