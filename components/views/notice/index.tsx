'use client';

import { Transaction } from './constants';
import { useEffect, useState } from 'react';

import TableSection from './TableSection';

const NoticeView = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions();
      setData(data);
    };
    fetchData();
  }, []);

  return <TableSection data={data} />;
};

export default NoticeView;

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch('https://67ecd18d4387d9117bbb1051.mockapi.io/api/v1/Transaction');
  const data = await res.json();
  return data;
}
