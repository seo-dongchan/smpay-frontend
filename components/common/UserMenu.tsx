'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { SectionLabel } from '@/components/composite/section-label';

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>XXX 님 환영합니다.</span>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px] px-4 ">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SectionLabel>기본 정보 변경</SectionLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SectionLabel>비밀번호 변경</SectionLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SectionLabel>로그아웃</SectionLabel>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SectionLabel>네이버 서비스 설정</SectionLabel>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SectionLabel>공지사항</SectionLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SectionLabel>고객센터</SectionLabel>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
