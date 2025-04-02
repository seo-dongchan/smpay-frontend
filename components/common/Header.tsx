import { Separator } from '@/components/ui/separator';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="h-full flex justify-end items-center space-x-4 text-sm py-3 px-4">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <UserMenu />
    </header>
  );
};

export default Header;
