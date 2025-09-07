import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your Workforce,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Transform Your Business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Skul Space provides a powerful, locally managed e-learning platform that is built to fit your budget.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">
                <strong>Affordable Solutions:</strong> Our transparent pricing is designed for the PNG market.
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">
                <strong>Local Support:</strong> Get on-the-ground help from a team that understands your business.
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">
                <strong>Effortless Training:</strong> Simplify training, compliance, and reporting with our all-in-one platform.
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Get Started with a Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;