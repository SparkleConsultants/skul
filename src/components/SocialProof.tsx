import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const logos = [
    { name: 'Bank South Pacific', logo: 'BSP' },
    { name: 'PNG Power', logo: 'PNG Power' },
    { name: 'Digicel PNG', logo: 'Digicel' },
    { name: 'Oil Search', logo: 'Oil Search' },
    { name: 'Steamships', logo: 'Steamships' },
    { name: 'PNG Ports', logo: 'PNG Ports' }
  ];

  const testimonials = [
    {
      quote: "Sparkle Consultants streamlined our safety training and saved us thousands in travel costs. Their local support is invaluable.",
      author: "Michael Temu",
      position: "Training Manager",
      company: "PNG Mining Corp",
      rating: 5
    },
    {
      quote: "The platform is intuitive and our employees love the flexibility. We've seen a 40% increase in training completion rates.",
      author: "Sarah Williams",
      position: "HR Director", 
      company: "Pacific Banking Group",
      rating: 5
    },
    {
      quote: "Outstanding service and support. The team understands our local needs and delivers solutions that actually work for PNG businesses.",
      author: "James Kila",
      position: "Operations Manager",
      company: "Highlands Transport Ltd",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing number of Papua New Guinea companies that trust Sparkle Consultants for their e-learning needs.
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {logos.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-sm border p-6 w-full h-20 flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-gray-600 font-semibold text-sm text-center">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Employees Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;