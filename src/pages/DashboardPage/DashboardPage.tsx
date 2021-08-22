import { PortfolioSection } from './components/PortfolioSection'
import styled from 'styled-components'
import { SummarySection } from './components/SummarySection'
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import SkeletonInput from 'antd/lib/skeleton/Input';
import ClearableLabeledInput from 'antd/lib/input/ClearableLabeledInput';
import TokenValuesJSON from '../../others/tokendata.json'
import { TokenValues } from 'types/TokenValue';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 15px;
    top: 40;
`

const DashboardPage = (props: any) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [input, setInput] = useState('');
    const [tokenValues, setTokenValues] = useState<TokenValues['tokenValues']>([]); 
    const onChange = ((event: any) => {
        setInput(event.target.value);
    })
    const callAPI = (walletAddress: string) => {
        console.log(walletAddress);
        setTokenValues(TokenValuesJSON);
    }

    const onKeydown = (event: any) => {
        console.log(event.target.value);
        if (event.key === "Enter" && event.target.value) {
            setWalletAddress(walletAddress);
            callAPI(walletAddress);
            setInput('');
            setTokenValues(TokenValuesJSON);
        }
    }

    return (
        <>
            <Container style={{ height: '1200px' }}>
                <Row gutter={[16, 8]}>
                    <Col style={{ display: 'flex', justifyContent: "flex-end" }} span={24}>
                        <input onChange={onChange} onKeyDown={onKeydown} style={{ height: '50px' }} type='text' value={input} placeholder="enter your wallet address here" />
                    </Col>
                </Row>
                <SummarySection tokenValues = {tokenValues}/>
                <PortfolioSection tokenValues = {tokenValues}/>
            </Container>
        </>
    )
}

export default DashboardPage