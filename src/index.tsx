import ReactDOM from 'react-dom';
import { Provider } from "jotai";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { FirebaseProvider } from './firebase';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from 'layouts/AdminLayout';
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider>
    <FirebaseProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="*" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
