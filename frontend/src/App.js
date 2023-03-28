import React, {useContext} from 'react';
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Kennel from './routes/Kennel';
import Home from "./routes/Home";
import Cutting from './routes/Cutting';
import Contact from './routes/Contact';
import CreateDog from './routes/CreateDog';
import CreateServis from './routes/CreateServis';
import LogIn from './routes/LogIn';
import {AuthProvider} from "./context/AdminContext"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <div className='bg-img'></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chovatelska_stanice'  element={<Kennel/>} />
          <Route path='/strihani' element={<Cutting />} />
          <Route path='/kontakt' element={<Contact />} />
          <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          <Route path="/prihlasit" element={<LogIn />} />
          <Route path='/pes' element={<CreateDog />}/>
          <Route path='/sluzba' element={<CreateServis/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
