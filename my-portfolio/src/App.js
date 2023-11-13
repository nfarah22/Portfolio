import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;