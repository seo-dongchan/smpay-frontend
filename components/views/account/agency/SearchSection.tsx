import { useRouter } from 'next/navigation';
import { Button, LinkButton } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/input';
import SearchToolbar from '@/components/common/SearchToolbar';

const SearchSection = () => {
  const router = useRouter();
  return (
    <SearchToolbar>
      <div className="flex items-center gap-2">
        <SearchInput className="w-[425px]" />
        <Button>검색</Button>
      </div>

      <div className="flex items-center gap-2">
        <LinkButton onClick={() => router.push('/account/agency-register')}>대행사 등록</LinkButton>
        <LinkButton onClick={() => router.push('/account/sign-up')}>회원 등록</LinkButton>
      </div>
    </SearchToolbar>
  );
};

export default SearchSection;
