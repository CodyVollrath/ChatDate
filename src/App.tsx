import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SignUp from './pages/Signup';
import LoginPage from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
