import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route path='/menu' element={< Menu />}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>


  );
}

export default App;
