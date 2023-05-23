import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/detail/:id' exact element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
