import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { React } from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Router } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Router path="/" Component={Home}/>
      <Router path="/about" Component={About}/>
      <Router path="/project" Component={Project}/>
      <Router path="/contact" Component={Contact}/>
    </BrowserRouter>
    /*<div>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>*/
  );
}

export default App;
