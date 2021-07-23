import { useEffect } from 'react';
import { prepareAxios } from './services/prepareAxios';
import logo from './assets/common/logo/logo.png';

function App() {
  useEffect(() => {
    prepareAxios()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
