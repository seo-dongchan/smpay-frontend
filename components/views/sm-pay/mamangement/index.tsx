'use client';

import FilterSection from './FilterSection';
import SearchSection from './SearchSection';
import TableSection from './TableSection';

// SM-Pay 관리 페이지 : 공통 ???
const SMPayManagementView = () => {
  return (
    <div>
      <SearchSection />
      <FilterSection />
      <TableSection />
    </div>
  );
};

export default SMPayManagementView;
