import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MapPin, DollarSign, BarChart3, Zap } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Local Expertise',
      description: 'On-the-ground support and a deep understanding of the local business environment.',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318862702_9245bc11.webp',
      benefits: [
        'PNG-based support team',
        'Understanding of local regulations',
        'Cultural sensitivity in training content',
        'Time zone aligned support'
      ]
    },
    {
      title: 'Cost-Effective',
      description: 'Leverage open-source technology to save on expensive licensing fees.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      image: 'https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318859420_eb52c6d8.webp',
      benefits: [
        'No expensive licensing fees',
        'Reduce travel and accommodation costs',
        'Lower total cost of ownership',
        'Flexible pricing models'
      ]
    },
    {
      title: 'Seamless Reporting',
      description: 'Track employee progress, course completion, and audit reports with ease.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      image: 'https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318866926_6492555c.webp',
      benefits: [
        'Real-time progress tracking',
        'Automated compliance reporting',
        'Custom dashboard views',
        'Export capabilities for audits'
      ]
    },
    {
      title: 'Flexible & Scalable',
      description: 'Our platform grows with your business, from a handful of users to thousands.',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      image: 'https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318859420_eb52c6d8.webp',
      benefits: [
        'Scale from 10 to 10,000+ users',
        'Modular feature additions',
        'Cloud-based infrastructure',
        'Mobile-responsive design'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sparkle Consultants?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Forma LMS solution is designed specifically for Papua New Guinea businesses, combining global best practices with local expertise.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-20`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="border-0 shadow-none">
                    <CardHeader className="px-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-0">
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">PNG Owned & Operated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Training Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Local Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;