import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects'; 
import Contact from './Contact';
import Footer from './Footer';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
