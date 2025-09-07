import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Star, Crown, Building2 } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Foundation Learning',
      subtitle: 'Bronze Tier',
      description: 'For small to medium-sized businesses starting their e-learning journey.',
      price: 'Starting at K2,500/month',
      icon: Building2,
      color: 'from-amber-500 to-orange-500',
      features: [
        'Cloud hosting and maintenance',
        'Branded learning portal',
        'Unlimited course access',
        'Basic email support',
        'Monthly progress reports',
        'Mobile-responsive platform'
      ]
    },
    {
      title: 'Professional Growth',
      subtitle: 'Silver Tier',
      description: 'The complete package for mid-sized companies seeking a full-service training partner.',
      price: 'Starting at K5,000/month',
      icon: Star,
      color: 'from-gray-400 to-gray-600',
      popular: true,
      features: [
        'All Bronze features included',
        'On-site training sessions',
        'Data migration support',
        'Dedicated virtual support',
        'Custom course development',
        'Advanced analytics dashboard',
        'Integration with HR systems'
      ]
    },
    {
      title: 'Enterprise Partnership',
      subtitle: 'Gold Tier',
      description: 'A fully customized solution for large corporations with complex training needs.',
      price: 'Custom pricing',
      icon: Crown,
      color: 'from-yellow-400 to-amber-500',
      features: [
        'All Silver features included',
        'Strategic consulting services',
        'Custom platform development',
        'Dedicated account manager',
        'White-label solutions',
        'API integrations',
        'Priority 24/7 support',
        'Compliance reporting'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our E-Learning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your organization's training needs. All tiers include our locally managed Forma LMS platform.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${service.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-blue-600 font-semibold">
                    {service.subtitle}
                  </CardDescription>
                  <p className="text-gray-600 mt-2">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-gray-900 mt-4">
                    {service.price}
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      service.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which tier is right for you? Let's discuss your specific needs.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;