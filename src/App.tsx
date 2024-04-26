import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          {/* <Route path="/game" element={<Game game="tic-tac-toe" />} />
          <Route path="tic-tac-toe" element={<Game game="tic-tac-toe" />} />
          <Route path="bricks" element={<Game game="bricks" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
