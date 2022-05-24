import { Nav } from 'react-bootstrap'

import logo from './logo.svg';
import profpi from './profpi.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={profpi} className="App-logo" alt="logo" />
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        <h1> Gloria Yoon</h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MainNav() {
  return(
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <div class="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
      </Nav.Item>
      <div class="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="link-2">More</Nav.Link>
      </Nav.Item>
      <div class="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

}

export default App;
