import { Portfolio } from "./Portfolio"
import { PortfolioExposure } from "./PortfolioExposure"
import { Row, Col } from 'antd'
import { TokenValues } from "types/TokenValue";
export const PortfolioSection = ({tokenValues, loading}: TokenValues) => {
  return (<>
    <Row gutter={[16, 8]}>
      <Col span={12} >
        <Portfolio tokenValues={tokenValues} loading = {loading} />
      </Col>
      <Col span={12} >
        <PortfolioExposure />
      </Col>
    </Row>
  </>);
}

