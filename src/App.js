import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
