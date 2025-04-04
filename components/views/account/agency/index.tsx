'use client';

import SearchSection from './SearchSection';
import TableSection from './TableSection';

export default function Agency() {
  return (
    <div className="flex flex-col gap-4">
      <SearchSection />
      <TableSection />
    </div>
  );
}
