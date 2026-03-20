import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
      {/* <script src="./js/app.js"></script> */}
    </>
  );
}

export default App;
