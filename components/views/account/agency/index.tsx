'use client';

import React, { useEffect, useState } from 'react';
import { Table, type TableProps } from 'antd';
import type { FilterValue, SortOrder } from 'antd/es/table/interface';

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: {
    current?: number;
    pageSize?: number;
  };
  sortField?: string;
  sortOrder?: SortOrder;
  filters?: Record<string, FilterValue | null>;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
  },
];

function toURLSearchParams(params: Record<string, unknown>) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (
      value !== undefined &&
      value !== null &&
      value !== '' // 빈 문자열도 제외하고 싶다면 추가
    ) {
      searchParams.append(key, String(value));
    }
  }
  return searchParams;
}
function getApiParams(params: TableParams) {
  return {
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    sortField: params.sortField,
    sortOrder: params.sortOrder,
  };
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    const apiParams = getApiParams(tableParams);
    const searchParams = toURLSearchParams(apiParams);

    console.log('searchParams', searchParams.toString());

    fetch(`https://randomuser.me/api?${searchParams.toString()}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams((prev) => ({
          ...prev,
          pagination: {
            ...prev.pagination,
            total: 200,
          },
        }));
      });
  };

  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams.sortField,
    tableParams.sortOrder,
  ]);

  const handleTableChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortField: !Array.isArray(sorter) ? String(sorter.field) : undefined,
      sortOrder: !Array.isArray(sorter) ? sorter.order : undefined,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table<DataType>
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default App;
