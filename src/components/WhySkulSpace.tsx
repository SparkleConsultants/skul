import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const WhySkulSpace = () => {
  const features = [
    {
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1757252296544_3d253a39.webp",
      title: "Local Expertise",
      description: "On-the-ground support and a deep understanding of the local business environment."
    },
    {
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1757252301030_a7a76fd9.webp",
      title: "Unbeatable Value",
      description: "Our model eliminates expensive licensing fees, providing a professional platform at a price designed for PNG."
    },
    {
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1757252305060_d0c02933.webp",
      title: "Reliable & Secure",
      description: "Your data is protected with professional-grade security, automated backups, and 24/7 monitoring."
    }
  ];

  return (
    <section id="why-skul-space" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Skul Space?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of doing business in Papua New Guinea and have built our platform to address them
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySkulSpace;