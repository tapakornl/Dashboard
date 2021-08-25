import { PortfolioSection } from "./components/PortfolioSection";
import styled from "styled-components";
import { SummarySection } from "./components/SummarySection";
import { Input, Col, Row } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import SkeletonInput from "antd/lib/skeleton/Input";
import ClearableLabeledInput from "antd/lib/input/ClearableLabeledInput";
import TokenValuesJSON from "../../others/tokendata.json";
import { TokenValues } from "types/TokenValue";
import { getProvider } from "others/testEthers";
import { ethers } from "ethers";
import { getTokenBalance } from "components/ethers/GetTokenBalance";
import { SearchOutlined } from '@ant-design/icons';
import { NetWorth } from "./components/NetWorth";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px;
  top: 40;
  height: 1200px;
`;

const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

const DashboardPage = (props: any) => {
  // componentwillmount
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [input, setInput] = useState("");
  const [tokenValues, setTokenValues] = useState<TokenValues["tokenValues"]>(
    []
  );
  const [netWorth, setNetWorth] = useState(0);
  const [provider, setProvider] = useState<any>();
  const [contract, setContract] = useState<any>();

  console.log(contract);
  const callAPI = (walletAddress: string) => {
    console.log(walletAddress);
    setTokenValues(TokenValuesJSON);
    setLoading(false);
  };

  useEffect(() => {
    getProvider().then((response) => {
      console.log(response);
      setProvider(response);
      // getContract(response);
    });
  }, []);

  const onChange = (event: any) => {
    setInput(event.target.value);
  };

  const onKeydown = async (event: any) => {
    console.log(event.target.value);
    if (event.key === "Enter" && event.target.value) {
      setLoading(true);
      setWalletAddress(event.target.value);
      setInput("");
      // console.log(contract);
      console.log("onkey wllet", event.target.value);
      let tokens: any = await getTokenBalance(provider, event.target.value);
      console.log("tokens", tokens);
      let net = tokens.reduce((a:any,b:any) => a + b.price * b.balance, 0);
      console.log('networth', net);
      setNetWorth(net)
      setTokenValues(tokens);

      setLoading(false);
      // console.log(ethers.utils.formatUnits(await (contract.balanceOf('0x81bfcc1e6f31023b80B8242C7C1395610A295EF0', { blockTag: 1500000 }))));
      // setTokenValues(TokenValuesJSON);
    }
  };

  return (
    <>
      <Container>
        <Row gutter={[16, 8]}>
          <Col
            style={{ display: "flex", justifyContent: "flex-end" }}
            span={24}
          >
            <Input
              onChange={onChange}
              onKeyDown={onKeydown}
              type="text"
              value={input}
              size="middle"
              placeholder="enter your wallet address here"
              style={{ width: '350px', marginRight: '16px' }}
              suffix= {suffix}
            />
          </Col>
        </Row>
        <SummarySection netWorth={netWorth} />
        <PortfolioSection tokenValues={tokenValues} loading={loading} />
      </Container>
    </>
  );
};

export default DashboardPage;
