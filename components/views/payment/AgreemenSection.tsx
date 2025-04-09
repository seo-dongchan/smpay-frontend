import { Fragment, useState } from 'react';

import { RadioGroup } from '@/components/ui/radio-group';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { SingleRadio } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { LinkTextButton } from '@/components/ui/button';

const AgreemenSection = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="mt-6 w-full inline-block mx-auto =">
      <Fragment>
        <div className="flex items-center gap-2">
          <SingleRadio checked={agreed} onClick={() => setAgreed(!agreed)} />
          <Label className="font-bold">전체 동의</Label>
        </div>

        <Separator className="my-6 border-black border-1" />

        <RadioGroup defaultValue="percent" className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="percent" id="above-percent" />
            <Label>[필수] 개인 정보 수집 이용에 동의합니다.</Label>
            <LinkTextButton className="ml-4">내용보기</LinkTextButton>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="fixed" id="above-fixed" />
            <Label>[필수] SM Pay 부가 서비스 이용에 동의합니다.</Label>
            <LinkTextButton className="ml-4">내용보기</LinkTextButton>
          </div>
        </RadioGroup>
      </Fragment>
    </section>
  );
};

export default AgreemenSection;
