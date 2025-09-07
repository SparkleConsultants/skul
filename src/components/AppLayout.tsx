import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Solutions from './Solutions';
import WhySkulSpace from './WhySkulSpace';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WhySkulSpace />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;