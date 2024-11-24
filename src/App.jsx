import { useState } from 'react';
import './App.css';

// react icons
import { FaReact } from 'react-icons/fa';
// components
import NavBar from './components/navBar/NavBar.jsx';
import Carousel from './components/carousel/Carousel.jsx'

function App() {

  return (
    <>

      {/*Fixed Navbar*/}
      <NavBar />

      {/*Carousel*/}
      <Carousel />

      <div className="container">
        <h1>Hello World!</h1>
      </div>

      <div className="text-center">
          <h1>Welcome to My Portfolio</h1>
          <FaReact size={50} color="blue" />
       </div>
    </>
  )
};

export default App;
