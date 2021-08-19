import { Portfolio } from "./Portfolio"
import { PortfolioExposure } from "./PortfolioExposure"
import { Row, Col } from 'antd'

export const PortfolioSection = () => {
  return (<>
    <Row gutter={[16, 8]}>
      <Col span={12} >

        <Portfolio tokens={[{ name: 'bnb', balance: 100 }]} />
      </Col>
      <Col span={12} >
        <PortfolioExposure />
      </Col>
    </Row>
  </>);
}

