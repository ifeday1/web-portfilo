import React from 'react'
import Navbar from "./components/Navbar";
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import  { useState, useEffect } from 'react';
import Cursor from "./components/Cursor";


function App() {
   const [scaling, setscaling] = useState(false);

  return (
      <div >
        <Cursor scaling={scaling} />
   <Navbar/>
    <About/>
    <Project/>
    <Contact/>

      </div>
  );
}

export default App;
