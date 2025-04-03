import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import UserMenu from '@/components/common/UserMenu';

const Header = () => {
  return (
    <header className="h-full flex justify-end items-center space-x-4 text-sm py-3 px-4">
      <Link href="/support">고객센터</Link>
      <Separator orientation="vertical" />
      <Link href="/notice">공지사항</Link>
      <Separator orientation="vertical" />
      <UserMenu />
    </header>
  );
};

export default Header;
