import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318590094_56cd2361.webp",
      bio: "10+ years in digital design and brand strategy"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318591862_4d001466.webp",
      bio: "Full-stack developer with expertise in modern frameworks"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318593771_30b70ccf.webp",
      bio: "Digital marketing expert driving growth for businesses"
    },
    {
      name: "David Kim",
      role: "UX Designer",
      image: "https://d64gsuwffb70l.cloudfront.net/68af4b3f3bbbf9b6620acf39_1756318595666_756372b3.webp",
      bio: "User experience specialist creating intuitive interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe in the power of great design and technology to transform businesses. 
              Our mission is to help companies of all sizes establish a strong digital presence 
              that drives growth and success.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 500 successful projects and a 98% client satisfaction rate, 
              we've proven our ability to deliver exceptional results that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;