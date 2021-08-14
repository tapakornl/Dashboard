import styled from 'styled-components'
import { SummarySection } from './components/SummarySection'
import { PortfolioSection } from './components/PortfolioSection'

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 15px;
`

const DashboardPage = (props: any) => {
    return (
        <>
            <Container>
                <SummarySection>

                </SummarySection>
                <PortfolioSection>

                </PortfolioSection>
            </Container>
        </>
    )
}

export default DashboardPage