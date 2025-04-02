'use client';
import { DataTable } from '@/components/data-table';
import { User, columns } from './constants';
import { useEffect, useState } from 'react';

const SupportView = () => {
  const [data, setData] = useState<User[]>([]);

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
      <DataTable columns={columns} data={data} />
    </section>
  );
};

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://67ecd18d4387d9117bbb1051.mockapi.io/api/v1/users');
  const data = await res.json();
  return data;
}

export default SupportView;
