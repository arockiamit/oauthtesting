import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './register/register';
import Modify from "./modify";
import View from "./viewnumber";
import Delete from "./remove";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/registerContact" element={<Register />} />
        <Route path='/modify' element={<Modify/>}/>
        <Route path='/viewnumber' element={<View/>}/>
        <Route path='/remove' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
