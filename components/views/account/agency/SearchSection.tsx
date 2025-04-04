import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/input';

const SearchSection = () => {
  return (
    <section className="mt-4 bg-[#F2F2F2] h-[65px] flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <SearchInput className="w-[425px]" />
        <Button>검색</Button>
      </div>

      <div className="flex items-center gap-2">
        <LinkButton>대행사 등록</LinkButton>
        <LinkButton>회원 등록</LinkButton>
      </div>
    </section>
  );
};

export default SearchSection;

const LinkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="ghost"
      className="w-[125px] bg-[#F6BE2C] hover:bg-[#F6BE2C] text-black font-bold"
    >
      {children}
    </Button>
  );
};
