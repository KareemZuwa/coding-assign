import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
      <div className="App">
      <Header />
      <div className="main">
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons/:userID" element={<Main />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
