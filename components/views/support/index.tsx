'use client';
import { DataTable } from '@/components/data-table';
import { User, columns } from './constants';
import { useEffect, useState } from 'react';

import {
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

const SupportView = () => {
  const [data, setData] = useState<User[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    // pageCount: totalPages, // 서버에서 받아온 총 페이지 수

    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="container">
      <h1 className="mb-6 text-3xl font-bold">All Users</h1>
      <DataTable columns={columns} table={table} />
    </section>
  );
};

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://67ecd18d4387d9117bbb1051.mockapi.io/api/v1/users');
  const data = await res.json();
  return data;
}

export default SupportView;
