import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CalendarPopover } from '@/components/ui/calendar';
import { format } from 'date-fns';
const FilterSection = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <section className="pt-2 pb-5 border-b border-[#656565]">
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="대행사를 선택하세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="그룹원을 선택하세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="광고주를 선택하세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-4" variant="dotted" />

      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="구분 : 일별조회" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="구분 : 월별조회" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <CalendarPopover
          date={date}
          onChange={setDate}
          customText={date ? `최근 7일  | ${format(date, 'yyyy-MM-dd')}` : '날짜를 선택해주세요'}
        />

        <Button variant="cancel">어제</Button>
        <Button variant="cancel">이번주</Button>
        <Button variant="cancel">지난주</Button>
        <Button variant="cancel">최근7일</Button>
        <Button variant="cancel">이번달</Button>
        <Button variant="cancel">지난달</Button>
      </div>
    </section>
  );
};

export default FilterSection;
