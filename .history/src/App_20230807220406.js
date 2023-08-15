import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { React } from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes path="/" Component={Home}/>
      <Routes path="/about" Component={About}/>
      <Routes path="/project" Component={Project}/>
      <Routes path="/contact" Component={Contact}/>
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
