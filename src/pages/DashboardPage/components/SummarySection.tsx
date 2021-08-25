import React from "react";
import { NetWorth } from './NetWorth'
import { DailyIncome } from './DailyIncome'
import { Row, Col } from 'antd'
import styled from "styled-components";

const Container = styled.div`
  min-height: 400px;
  border: 2px solid rgba(240, 240, 240,1);
  display:flex;
  flex-direction:column;
  background-color: #FFFFFF;
  margin  : 16px;
  border-radius: 12px;
`

export const SummarySection = ({netWorth}:any) => {
  return (
    // <Container>
      <Row gutter={[16, 8]}>
        <Col span={12} >
          <NetWorth class="header-child" netWorth={netWorth} />
        </Col>
        <Col span={12} >
          <DailyIncome>
          </DailyIncome>
        </Col>
      </Row>
    // </Container>
  )
}