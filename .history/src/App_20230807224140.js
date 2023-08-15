import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
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
        {/* Add an Outlet for rendering the ErrorPage when no route matches */}
        <Route path="./components/ErrorPage.js" element={<Outlet><ErrorPage /></Outlet>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
