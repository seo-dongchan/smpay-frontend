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

      <LinkButton onClick={() => router.push('/account/agency-register')}>+ SM Pay 신청</LinkButton>
    </SearchToolbar>
  );
};

export default SearchSection;
