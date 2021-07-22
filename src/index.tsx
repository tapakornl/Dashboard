import ReactDOM from 'react-dom';
import { Provider } from "jotai";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { FirebaseProvider } from './firebase';
import App from './App';

ReactDOM.render(
  <Provider>
    <FirebaseProvider>
      <App />
      <GlobalStyle />
    </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
