import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
        <Header />
        <SideBar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}/>
        </Routes>
    </div>
  );
}

export default App;
