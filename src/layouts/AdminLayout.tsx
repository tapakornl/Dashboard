import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar'
import styled from 'styled-components';
import { routes } from ' routes';
import Navbar from 'components/Navbar';

const Container = styled.div`
  min-height: 100%;
  display:flex;
  flex-direction:column;
  background-color: #F8F8F8;
`

const AdminLayout = (props: any) => {
  const [pageName, setPageName] = useState("Dashboard")
  return (
    <>
      <Container>
        <Navbar pageName={pageName} />
        <Sidebar>
          {routes.map((page: any) => console.log(page))}
        </Sidebar>
      </Container>

    </>
  )
}

export default AdminLayout