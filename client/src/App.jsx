import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';

import Register from './register/register';
import Home from './pages/home/home';
import Location from './pages/Loaction/location';
import CallNumber from './pages/CallNumber/CallNumber';
import DeleteCallNumber from './pages/DeleteCallNum/DeleteCallNum';
import DeleteRegNumber from './pages/DeleteRegNum/DeleteRegNum';
import RegisterNumber from './pages/RegisterNumber/RegisterNumber';
import ViewNumber from './pages/ViewNumber/ViewNumber.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element = {<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/callNumber" element={<CallNumber />} />
          <Route path="/deleteCallNumber" element={<DeleteCallNumber />} />
          <Route path="/deleteRegNumber" element={<DeleteRegNumber />} />
          <Route path="/registerNumber" element={<RegisterNumber />} />
          <Route path="/viewNumber" element={<ViewNumber />} />
          <Route path="/location" element={<Location />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerContact" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
