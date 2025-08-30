import React from 'react';
import { CheckCircle, Users, Award, Shield, Clock, Wrench } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experienced',
      description: 'Over 25 years'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'All Makes Serviced',
      description: 'Every vehicle type'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Fair & Upfront Pricing',
      description: 'No hidden costs'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Value for Experience, Tools',
      description: 'Quality service'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Quality Parts & Components',
      description: 'Premium materials'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Warranty on Our Workmanship',
      description: 'Guaranteed work'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Red accent lines */}
      <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>
      <div className="absolute right-0 top-0 w-2 h-full bg-red-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mechanics image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional mechanics"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose{' '}
                <span className="text-red-600">All Brakes & Mechanical</span>
                <span className="text-blue-800">?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                As a family-owned and operated business, we take pride in delivering 
                exceptional automotive service. With over 25 years of combined 
                experience, we use quality parts, provide honest advice, 
                and deliver prompt, professional service every time.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                    <div className="text-blue-800">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;