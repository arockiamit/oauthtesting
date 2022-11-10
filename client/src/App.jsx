import React from 'react';
import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Menu from './components/Menu/Menu';

import Register from './register/register';
import Location from './pages/Loaction/location';
import CallNumber from './pages/CallNumber/CallNumber';
import DeleteCallNumber from './pages/DeleteCallNum/DeleteCallNum';
import DeleteRegNumber from './pages/DeleteRegNum/DeleteRegNum';
import RegisterNumber from './pages/RegisterNumber/RegisterNumber';
import ViewNumber from './pages/ViewNumber/ViewNumber';

function App() {
  const registerdUser = localStorage.getItem('token');
  // if (!registerdUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!registerdUser ? <Register /> : <Navigate to="/Menu" />} />
          <Route path="/Menu" element={registerdUser ? <Menu /> : <Navigate to="/" />} />
          <Route path="/callNumber" element={<CallNumber />} />
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
