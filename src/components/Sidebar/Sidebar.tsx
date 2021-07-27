import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import styled from 'styled-components'

const NavContainer = styled.div`
  width: 64px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 40px;
`

const Sidebar = (props: any) => {
  return (
    <>
      <NavContainer>
        <SimpleBar style={{ maxHeight: 300 }}>

        </SimpleBar>
      </NavContainer>
    </>
  )
}

export default Sidebar