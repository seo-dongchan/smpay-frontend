import { useRouter } from 'next/navigation';
import { Button, LinkButton } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/input';
import { SearchBox } from '@/components/common/Box';

const SearchSection = () => {
  const router = useRouter();
  return (
    <SearchBox className="justify-between">
      <div className="flex items-center gap-2">
        <SearchInput className="w-[425px]" />
        <Button>검색</Button>
      </div>

      <div className="flex items-center gap-2">
        <LinkButton onClick={() => router.push('/account/agency-register')}>대행사 등록</LinkButton>
        <LinkButton onClick={() => router.push('/account/sign-up')}>회원 등록</LinkButton>
      </div>
    </SearchBox>
  );
};

export default SearchSection;
