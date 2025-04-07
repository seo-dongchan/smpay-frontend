interface Props {
  children?: React.ReactNode;
}

const SearchToolbar = ({ children }: Props) => {
  return (
    <section className="mt-4 bg-[#F2F2F2] h-[65px] flex items-center justify-between p-4">
      {children}
    </section>
  );
};

export default SearchToolbar;
