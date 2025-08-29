import "./App.css";

import Home from "./pages/Home";
import CodeEmbed from "./pages/CodeEmbed";
import Debounce from "./pages/Debounce";
import Memo from "./pages/Memo";
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
