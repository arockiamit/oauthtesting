import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';

import Register from './register/register';
import Home from './pages/home/home';
import Location from './pages/Loaction/location';
import DeleteCallNumber from './pages/DeleteCallNum/DeleteCallNum';
import DeleteRegNumber from './pages/DeleteRegNum/DeleteRegNum';
import RegisterNumber from './pages/RegisterNumber/RegisterNumber';
import ViewNumber from './pages/ViewNumber/ViewNumber';
import EditNumber from './pages/EditNumber/EditNumber';

function App() {
  // const registerdUser = localStorage.getItem('token');
  // console.log(registerUser);
  // if (!registerdUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/callNumber" element={<EditNumber />} />
          <Route path="/deleteCallNumber" element={<DeleteCallNumber />} />
          <Route path="/deleteRegNumber" element={<DeleteRegNumber />} />
          <Route path="/registerNumber" element={<RegisterNumber />} />
          <Route path="/viewNumber" element={<ViewNumber />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
