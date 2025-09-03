import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Solutions from './Solutions';
import SocialProof from './SocialProof';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;