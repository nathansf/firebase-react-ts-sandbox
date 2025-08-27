import "./App.css";

import Home from "./components/Home";
import CodeEmbed from "./components/CodeEmbed";
import Debounce from "./components/Debounce";
import Memo from "./components/Memo";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/debounce" element={<Debounce />}></Route>
          <Route path="/memo" element={<Memo />}></Route>
          <Route path="/embed" element={<CodeEmbed />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
