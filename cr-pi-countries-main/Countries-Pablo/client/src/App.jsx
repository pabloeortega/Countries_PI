import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Landing from './pages/Landing/Landing';
import Form from './pages/Form/Form';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} exact />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;