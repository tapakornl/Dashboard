import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import styled from 'styled-components'

const NavContainer = styled.div`
  width: 64px;
  height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 40px;
  top:40;
  position: sticky;
`

const Sidebar = (props: any) => {
  return (
    <>
      <NavContainer>
        <SimpleBar style={{ maxHeight: 300, padding: "15px" }}>
        Home
        </SimpleBar>
        <SimpleBar style={{ maxHeight: 300 }}>
        Portfolio
        </SimpleBar>
      </NavContainer>
    </>
  )
}

export default Sidebar