import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Menu from './Menu/Menu';
import LoginPageC from './LoginC/LoginPageC';
import LoginPageR from './LoginR/LoginPageR';
import MainPage from './MainC/MainPage';
import Main4 from './Pantalla4/Main4';
import Main6 from './Pantalla6/Main6';
import Pantallita from './Pantalla7/Pantallita';
import Main8 from './Pantalla8/Main';
import Main10 from './Pantalla10/MainPage';
import Main13 from './Pantalla13/MainPage';
import Main16 from './Pantalla16/Main16';
import Comments from './Coments/Comments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPageC/>}/>
        <Route path='/pantalla9' element= {<LoginPageR/>}/>
        <Route path='/pantalla3' element= {<div><Menu/><MainPage/></div>}/>
        <Route path='/pantalla4' element= {<div><Menu/><Main4/></div>}/>
        <Route path='/pantalla6' element= {<div><Menu/><Main6/></div>}/>
        <Route path='/pantalla7' element= {<div><Menu/><Pantallita/></div>}/>
        <Route path='/main' element= {<div><Menu/><Main8/></div>}/>
        <Route path='/pantalla10' element= {<div><Menu/><Main10/></div>}/>
        <Route path='/pantalla13' element= {<div><Menu/><Main13/></div>}/>
        <Route path='/pantalla16' element= {<div><Menu/><Main16/></div>}/>
        <Route path='/sorpresa' element= {<div><Menu/><Comments/></div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

