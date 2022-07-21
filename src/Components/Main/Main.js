import { Col, Row, Button } from 'antd'
import React from 'react'
import Table from './Table'
import Calendar from './Calendar'
import Status from './Status'

import './Main.css'

const Main = () => (
  <Row>
    <Col className="main" xs={24} sm={24} md={16} lg={16}>
      <p className="greet">Hello Oluwatobi</p>
      <img className="main-img" src="./images/main.png"></img>
      <Row className="charts">
        <Col xs={24} sm={12} md={8} lg={8}>
          <img className="chart1" src="./images/chart1.png"></img>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
          <img className="chart2" src="./images/chart2.png"></img>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
          <img className="chart3" src="./images/chart3.png"></img>
        </Col>
      </Row>
      <Row className="table">
        <Col xs={24} sm={12} md={24} lg={24}>
          <p className="table-title">Pending Appointments</p>
          <Table></Table>
        </Col>
      </Row>
    </Col>
    <Col xs={0} sm={0} md={8} lg={8}>
      <Row className="appoint">
        <Col xs={6} sm={6} md={6} lg={6}>
          <p className="cal-title">Appointment</p>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}></Col>
        <Col className="set_button" xs={8} sm={8} md={8} lg={8}>
          <Button danger>Book new appointment</Button>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}></Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Calendar />
        </Col>
      </Row>
      <Row className="status">
        <Col xs={24} sm={24} md={24} lg={24}>
          <Status />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Main
