'use client';

import { Table, type TableProps } from 'antd'; // type TablePaginationConfig
// import type { FilterValue, SortOrder } from 'antd/es/table/interface';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CustomTableProps<T> extends TableProps<T> {
  total?: number;
}

function CustomTable<T extends { id: string | number }>({
  columns,
  dataSource,
  total = 50,
  ...rest
}: CustomTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Table<T>
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
      pagination={{
        pageSize: 10,
        current: currentPage,
        total,
        onChange: (page) => setCurrentPage(page),
        itemRender: (page, type) => {
          // originalElement
          if (type === 'prev') {
            return <button className="custom-arrow">&larr;</button>;
          }
          if (type === 'next') {
            return <button className="custom-arrow">&rarr;</button>;
          }
          return (
            <button className={cn('custom-page', page === currentPage && 'custom-page-active')}>
              {page}
            </button>
          );
        },
      }}
      {...rest}
    />
  );
}

export default CustomTable;
