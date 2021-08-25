import styled from "styled-components";
import Notification from 'components/Notification'
import Profile from 'components/Profile'

const Container = styled.div`
  position:sticky;
  top:0px;
  width: 100%;
  height: 67px;
  display:flex;
  justify-content:space-between;
  padding: 8px 16px 8px 16px;
  align-items:center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.055);
  color: #397CDD;
  font-weight: 600;
  z-index: 1;
  background-color: #FAFAFA;
`

const Block = styled.div`
  height:100%;
  width:fit-content;
  display:flex;
  justify-content:center;
  align-items:center;
`

const PageName = styled.p`
  font-size: 24px;
  margin:48px;
`

const IconContainer = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  width: 64px;
  height:68px;

`

const IconImage = styled.img`
  width: 100%;
  height: 100%;
`

type NavbarProps = {
  pageName: string
}

const Navbar = ({ pageName }: NavbarProps) => {
  return (
    <>
      <Container>
        <Block>
          <PageName>
            {pageName}
          </PageName>
        </Block>
        <Block>
        </Block>
      </Container>
    </>
  )
}

export default Navbar