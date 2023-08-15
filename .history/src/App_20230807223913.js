import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
