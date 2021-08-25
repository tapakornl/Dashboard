import { Col, Row } from "antd";
import { TokenValues } from "types/TokenValue";
import { Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { Console } from "console";
import styled from "styled-components";

type token = {
  name: string;
  balance: number;
  price: number;
  // yesterdayPrice: number,
  value: number;
  // chain: string
};

const Container = styled.div`
  min-height: 400px;
  border: 2px solid rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 16px 16px 8px 16px;
  border-radius: 12px;
`;

const columns = [
  {
    title: "Assets",
    dataIndex: "symbol",
    key: "symbol",
  },
  {
    title: "Chain",
    dataIndex: "chain",
    key: "chain",
  },
  {
    title: "Balances",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    sorter: (a: any, b: any) => a.value - b.value,
  },
];

export const Portfolio = ({ tokenValues, loading }: TokenValues) => {
  var toktok = tokenValues.map((tokenValue) => ({
    symbol: tokenValue.symbol,
    chain: tokenValue.chain,
    price: tokenValue.price,
    balance: tokenValue.balance.toFixed(2),
    value:
      tokenValue.price * tokenValue.balance < 0.005
        ? 0
        : (tokenValue.price * tokenValue.balance).toFixed(2),
  }));

  toktok.sort((a, b) => (a.balance < b.balance ? 1 : -1));

  console.log(toktok);
  return (
    <Container>
      <div style={{ padding: "15px" }}>
        {/* <Row gutter={[16, 8]}>
      </Row> */}
        <Row gutter={[16, 8]}>
          <Col span={24}>
            <h2 style={{ padding: "15px" }}>Your Porfolio</h2>
            <Table
              dataSource={toktok}
              columns={columns}
              loading={loading}
              pagination={{ pageSize: 30 }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
