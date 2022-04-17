import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
      <div className="App">
      <Header />
      <div className="main">
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons" element={<Main />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
