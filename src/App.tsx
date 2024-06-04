import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
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
