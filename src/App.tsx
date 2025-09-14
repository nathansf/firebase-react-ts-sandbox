import "./App.css";

import CodeEmbed from "./pages/CodeEmbed";
import DataFetching from "./pages/DataFetching";
import Home from "./pages/Home";
import Debounce from "./pages/Debounce";
import Map from "./pages/MapDemo";
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
          <Route path="/map" element={<Map />}></Route>
          <Route path="/embed" element={<CodeEmbed />}></Route>
          <Route path="/fetch" element={<DataFetching />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
