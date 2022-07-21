import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message, Space } from 'antd'
import React from 'react'
import { ReactComponent as Logout } from '../SVG/log-out.svg'
import './Dropdown.css'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: 'Homepage',
        key: '1',
      },
      {
        label: 'Sign Out',
        key: '2',
        icon: <Logout />,
      },
    ]}
  />
)

const App = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App
