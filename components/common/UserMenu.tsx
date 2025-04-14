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

import { BulletLabel } from '@/components/composite/label';
import { useRoleStore } from '@/store/useRoleStore';

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const { setRole } = useRoleStore();

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
            <BulletLabel>기본 정보 변경</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRole('admin')}>
            <BulletLabel>관리자</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRole('agency')}>
            <BulletLabel>대행사</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BulletLabel>비밀번호 변경</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BulletLabel>로그아웃</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <BulletLabel>네이버 서비스 설정</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <BulletLabel>공지사항</BulletLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BulletLabel>고객센터</BulletLabel>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
