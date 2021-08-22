import React from "react";
import { NetWorth } from './NetWorth'
import { DailyIncome } from './DailyIncome'
import { Row, Col } from 'antd'
export const SummarySection = (props: any) => {
  return (
    <Row gutter={[16, 8]}>
      <Col span={12} >
        <NetWorth class="header-child">
        </NetWorth>
      </Col>
      <Col span={12} >
        <DailyIncome>
        </DailyIncome>
      </Col>
    </Row>
  )
}