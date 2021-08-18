import { PortfolioSection } from './components/PortfolioSection'
import styled from 'styled-components'
import { SummarySection } from './components/SummarySection'
import { Row } from 'antd';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 15px;
`

const DashboardPage = (props: any) => {
    return (
        <>
        <Row gutter={[16, 8]}>


            <Container>
                <SummarySection  /> 
                <PortfolioSection />
            </Container>
            </Row>

        </>
    )
}

export default DashboardPage