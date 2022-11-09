import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/registerContact" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

