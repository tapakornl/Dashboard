import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styled from "styled-components";
import { AiOutlinePieChart } from "react-icons/ai";
const NavContainer = styled.div`
  width: 300px;
  height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 40px;
  top: 67px;
  position: sticky;
`;

const Sidebar = (props: any) => {
  return (
    <>
      <NavContainer>
        <SimpleBar
          style={{ maxHeight: 300, textAlign: "center", display: "flex", alignItems: 'center', fontSize: '16px'}}
        >
          <AiOutlinePieChart style={{marginRight: '16px'}}/>
          Portfolio
        </SimpleBar>
      </NavContainer>
    </>
  );
};

export default Sidebar;
