import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Corporate Starter",
      ideal: "Large companies and corporations",
      pricing: "K1,000/month base fee + K5/active user/month",
      example: "For a company with 1,000 active users, the total cost is K6,000 per month",
      features: [
        "Unlimited course access",
        "Advanced reporting & analytics",
        "Multi-department management",
        "Priority support",
        "Custom branding",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Public & NGO Partner",
      ideal: "Government departments and non-profit organizations",
      pricing: "K1,000/month (up to 250 users) or K3,000/month (up to 1,000 users)",
      example: "Special rates for public sector organizations",
      features: [
        "Bulk user management",
        "Government-grade security",
        "Compliance reporting",
        "Multi-location support",
        "Dedicated account manager",
        "Training & onboarding"
      ],
      popular: false
    },
    {
      name: "Training Partner",
      ideal: "Training firms and professional associations",
      pricing: "K250/month + 15% of course sales",
      example: "Revenue sharing model for training providers",
      features: [
        "Course marketplace access",
        "Content creation tools",
        "Student management",
        "Payment processing",
        "Marketing support",
        "Performance analytics"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple & Affordable Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe in straightforward, transparent pricing. Choose the plan that best fits your organization, and get started with a free one-month trial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : 'border shadow-md'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  <strong>Ideal for:</strong> {plan.ideal}
                </CardDescription>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    {plan.pricing}
                  </div>
                  <div className="text-sm text-gray-500">
                    {plan.example}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;