import { Table } from 'antd'
import React from 'react'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Latest',
    dataIndex: 'Latest',
    key: 'latest',
  },
  {
    title: 'Time',
    dataIndex: 'Time',
    key: 'time',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'status',
  },
  {
    title: 'Donor id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    dataIndex: '',
    key: 'x',
    render: () => (
      <a>
        <img src="./images/delete.png"></img>{' '}
      </a>
    ),
  },
]
const data = [
  {
    key: 1,
    name: 'John Brown',
    Latest: 'Recent',
    Time: '1:30-2:30 pm',
    Status: 'Pending',
    id: 'aa234-678',
  },
  {
    key: 2,
    name: 'Jim Green',
    Latest: '2days ago',
    Time: '1:30-2:30 pm',
    Status: 'Pending',
    id: 'aa234-678',
  },
  {
    key: 3,
    name: 'Not Expandable',
    Latest: '3days ago',
    Time: '1:30-2:30 pm',
    Status: 'Pending',
    id: 'aa234-678',
  },
]

const App = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
)

export default App
