import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
      <div className="App">
      <Header />
      <div className="main">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons" element={<Main />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
