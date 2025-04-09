import { Button } from '@/components/ui/button';
import { dialogContent, DialogStatus } from './constants';
import { useState } from 'react';
import { ConfirmDialog } from '@/components/composite/modal';
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
      <p className="py-[50px]">Copyright ⓒ SM Pay. All rights reserved.</p>
    </section>
  );
};

export default FooterSection;
