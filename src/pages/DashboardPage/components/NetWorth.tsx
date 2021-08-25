import { Row, Col } from "antd";
import { NONAME } from "dns";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 400px;
  border: 2px solid rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 16px 16px 8px 16px;
  border-radius: 12px;
`;

export const NetWorth = ({ netWorth }: any) => {
  console.log("networth", netWorth);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2
              style={{ float: "left", padding: 0, border: 0, margin: "16px" }}
            >
              Net worth
            </h2>
          </Col>
        </Row>
        <Row gutter={[16, 8]} style={{height:'100%'}}>
          <Col span={24} style={{display: "flex", justifyContent: "center", height: '300px', alignItems:"center"}}>
            <p style={{fontSize:"48px"}}>{netWorth.toFixed(2)}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
