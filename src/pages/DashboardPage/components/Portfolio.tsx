import { Row } from "antd";
import { TokenValues } from "types/TokenValue";

type token = {
  name: string;
  balance: number;
  // price: number,
  // yesterdayPrice: number,
  // value: number,
  // chain: string
};
export const Portfolio = ({ tokenValues }: TokenValues) => {
  var toktok = tokenValues.map((tokenValue) => (
    <>
      <div key={tokenValue.name}>
        tokens: {tokenValue.name}, balance: {tokenValue.balance}
      </div>
    </>
  ));

  return (
    <div>
      <Row gutter={[16, 8]}>
        <h2 style={{ float: "left" }}>Your Porfolio</h2>
      </Row>
      <Row> {toktok}</Row>
    </div>
  );
};
