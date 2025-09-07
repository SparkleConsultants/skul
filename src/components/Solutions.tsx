import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, Users, BookOpen } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Corporate Training",
      description: "Automate employee onboarding, compliance, and professional development.",
      features: [
        "Automated onboarding workflows",
        "Compliance tracking and reporting",
        "Skills development programs",
        "Performance analytics"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Public Sector",
      description: "A scalable platform for training large, distributed government and NGO teams.",
      features: [
        "Multi-location deployment",
        "Government-grade security",
        "Bulk user management",
        "Custom reporting dashboards"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Content & Courses",
      description: "Sell your own courses or subscribe to a pre-built content library.",
      features: [
        "Course marketplace integration",
        "Content creation tools",
        "Revenue sharing options",
        "Pre-built course library"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your E-Learning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training solutions designed to meet the unique needs of different organizations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:bg-blue-50 transition-colors">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;