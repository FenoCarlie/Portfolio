import './App.css';
import React from 'react';
import About from './components/About';
import NavBar from './components/NavBar;
import Project from './components/Project';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;