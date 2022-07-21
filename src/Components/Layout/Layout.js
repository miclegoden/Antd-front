import { Layout, Menu, Col, Row } from 'antd'
import React from 'react'
import './Layout.css'
import { ReactComponent as Dashboard } from '../SVG/dashboard.svg'
import { ReactComponent as Heart } from '../SVG/heart.svg'
import { ReactComponent as History } from '../SVG/history.svg'
import { ReactComponent as Wallet } from '../SVG/wallet.svg'
import Dropdown from '../Dropdown/Dropdown'
import Main from '../Main/Main'
const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem('Dashboard', '1', <Dashboard />),
  getItem('Medical', '2', <Heart />),
  getItem('STX Wallet', '3', <Wallet />),
  getItem('History', 'sub1', <History />),
]
const App = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo">
        <img className="logo-img" src="./images/logo.png"></img>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
        // items={[Dashboard, Heart, Wallet, History].map((icon, index) => ({
        //   key: String(index + 1),
        //   icon: React.createElement(icon),
        //   label: `nav ${index + 1}`,
        // }))}
      />
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header className="site-layout-background">
        <Row className="header">
          <Col xs={2} sm={4} md={4} lg={2}>
            <p className="content"> Dashboard </p>
          </Col>
          <Col xs={12} sm={16} md={14} lg={12}></Col>
          <Col xs={10} sm={4} md={6} lg={10}>
            <Row>
              <Col xs={4} sm={4} md={6} lg={9}>
                <p className="connect-wallet">Connects STX account</p>
              </Col>
              <Col xs={2} sm={1} md={1} lg={2}></Col>
              <Col xs={2} sm={4} md={6} lg={2}>
                <img src="./images/alarm.png"></img>
              </Col>
              <Col xs={2} sm={1} md={1} lg={1}></Col>
              <Col xs={2} sm={4} md={6} lg={3}>
                <img src="./images/avatar.png"></img>
              </Col>
              <Col xs={10} sm={8} md={6} lg={6}>
                Oluwatobu Timothy
              </Col>
              {/* <Col xs={2} sm={1} md={1} lg={1}></Col> */}
              <Col xs={10} sm={8} md={6} lg={1}>
                <Dropdown className="dropdown" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <Main />
      </Content>
    </Layout>
  </Layout>
)

export default App
