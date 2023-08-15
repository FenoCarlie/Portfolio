import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { React } from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/project" Component={Project}/>
      <Route path="/contact" Component={Contact}/>
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
