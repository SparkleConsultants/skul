import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1757252212007_71b1829f.webp" 
              alt="Skul Space" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('why-skul-space')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Skul Space?
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
             <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
               Request a Free Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('solutions')} className="text-left text-gray-700 hover:text-blue-600">
                Solutions
              </button>
              <button onClick={() => scrollToSection('why-skul-space')} className="text-left text-gray-700 hover:text-blue-600">
                Why Skul Space?
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-blue-600">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                Request a Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;