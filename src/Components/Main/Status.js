import GaugeChart from 'react-gauge-chart'
import { Col, Row } from 'antd'
import Graph from './Graph'

export default function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={12} sm={12} md={12} lg={11}>
          <p className="status-title">Performance Status</p>
        </Col>
      </Row>
      {/* <div className="status-title">Performance Status</div> */}
      <GaugeChart
        id="gauge-chart"
        textColor="#333"
        nrOfLevels={3}
        arcsLength={[0.12, 0.85]}
        colors={['#F00530', '#FEE6EB']}
        percent={0.12}
        arcPadding={0.02}
        text
      />

      <Row>
        <Col xs={4} sm={4} md={4} lg={2}></Col>
        <Col xs={5} sm={5} md={5} lg={5}>
          <p className="percentage">
            Completed
            <br></br>
            <p className="amount">0%</p>
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={11}></Col>
        <Col xs={5} sm={5} md={5} lg={5}>
          <p className="percentage">
            In progress
            <br></br>
            <p className="amount">0%</p>
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}></Col>
      </Row>

      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={12} sm={12} md={12} lg={11}>
          <p className="status-title">Your Performance</p>
        </Col>
      </Row>
      <Row className="graph">
        <Col xs={24} sm={24} md={24} lg={24}>
          <Graph />
        </Col>
      </Row>
    </div>
  )
}
