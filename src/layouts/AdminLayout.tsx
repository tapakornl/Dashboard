import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar'
import styled from 'styled-components';
import { routes } from ' routes';
import Navbar from 'components/Navbar';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  min-height: 100%;
  display:flex;
  flex-direction:column;
  background-color: #F8F8F8;
`

const Main = styled.main`
  width: 100vw;
  min-height: calc(100vh - 67px);
  display:flex;
`

const AdminLayout = (props: any) => {
  let history = useHistory();
  const [token] = useState(localStorage.getItem('accessToken'));
  const url = window.location.pathname.split("/")[2]
  const [pageName, setPageName] = useState(url)

  const handleSelectTab = (path: string) => {
    history.push(`/admin${path}`)
    setPageName(path.split('/')[1])
  }

  const getRoutes = (routes: any[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  // if (!token) {
  //   window.location.href = "/login"
  // }

  return (
    <>
      <Container>
        <Navbar pageName={pageName} />
        <Main>
          <Sidebar routes={routes} selectedRoute={pageName} handleSelectTab={handleSelectTab} />
          <Switch>{getRoutes(routes)}</Switch>
        </Main>
      </Container>

    </>
  )
}

export default AdminLayout