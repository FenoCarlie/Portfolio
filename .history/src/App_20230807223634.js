import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route as well
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;