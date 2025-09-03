import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318855258_0abc2bd9.webp')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empower Your Workforce, 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Sparkle</span> Your Business
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Sparkle Consultants provides locally managed e-learning solutions that transform your team's skills and drive business growth in PNG.
          </p>
          
          {/* Benefit Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">Reduce training costs and travel expenses</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">Standardize training for all employees, anywhere</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-lg">Simplify compliance and reporting</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            >
              Request a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Employees Trained</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-gray-300">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Local Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;