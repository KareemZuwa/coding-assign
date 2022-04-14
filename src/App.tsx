import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SideBarTwo from './components/SideBarTwo';
import MainPage from './components/MainPage';

function App() {

  return (
    <div className="App">
        <Header />
      {/* <SideBar /> */}
      <SideBarTwo />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/persons' element={<MainPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
