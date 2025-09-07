import React from 'react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
          </div>

          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  <strong>Skul Space</strong> is a product of <strong>Sparkle Consultants</strong>, a Port Moresby-based firm dedicated to empowering businesses and organizations through innovative and affordable digital solutions.
                </p>
                
                <p>
                  Our mission is to transform corporate training in Papua New Guinea by providing world-class e-learning technology with unmatched local expertise and support.
                </p>
                
                <p>
                  We understand the unique challenges that businesses face in PNG - from geographical barriers to budget constraints - and we've designed Skul Space to address these challenges head-on. Our platform combines international best practices with local knowledge to deliver training solutions that actually work for Papua New Guinea organizations.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-700">
                    We're not just another software company. We're your local partners in transformation, committed to helping Papua New Guinea organizations build stronger, more skilled workforces through accessible, affordable, and effective e-learning solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;