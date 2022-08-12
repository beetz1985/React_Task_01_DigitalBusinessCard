import React from 'react';
import ReactDOM from 'react-dom/client';
import MainInfo from '../src/components/MainInfo';
import About from '../src/components/About';
import Interests from '../src/components/Interests';
import Social from '../src/components/Social';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">
    <MainInfo />
    <About />  
    <Interests />
    <Social />   
  </div>

);

//Main Info
//About
//Interests
//Social

