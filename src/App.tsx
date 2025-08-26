import "./App.css";

import Home from "./components/Home";
import Debounce from "./components/Debounce";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/debounce">Debounce exercise</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/debounce" element={<Debounce />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
