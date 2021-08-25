import { Portfolio } from "./Portfolio";
import { PortfolioExposure } from "./PortfolioExposure";
import { Row, Col } from "antd";
import { TokenValues } from "types/TokenValue";
import styled from "styled-components";

const Container = styled.div`
  min-height: 400px;
  border: 2px solid rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 16px;
  border-radius: 12px;
`;

export const PortfolioSection = ({ tokenValues, loading }: TokenValues) => {
  return (
    <>
      <Container>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Portfolio tokenValues={tokenValues} loading={loading} />
          </Col>
          <Col span={12}>
            <PortfolioExposure />
          </Col>
        </Row>
      </Container>
    </>
  );
};
