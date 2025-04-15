import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/input';
import { SearchBox } from '@/components/common/Box';

const SearchSection = () => {
  return (
    <SearchBox className="justify-between">
      <div className="flex items-center gap-2">
        <SearchInput className="w-[425px]" />
        <Button>검색</Button>
      </div>
    </SearchBox>
  );
};

export default SearchSection;
