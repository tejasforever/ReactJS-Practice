import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useServices } from '../hooks/useData';

const Services = () => {
  const { services, loading } = useServices();

  if (loading) {
    return (
      <section className="py-16 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        {/* Header with navigation arrows */}
        <div className="flex items-center justify-between mb-12">
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Services <span className="text-red-500">We Provide</span>
            </h2>
            <p className="text-gray-300 mt-2">
              At All Brakes, we're streamlining your automotive experience
            </p>
          </div>

          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color_from} ${service.color_to} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-white/80 text-sm mt-1">{service.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom features */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-blue-800 rounded-lg">
            <div className="text-white font-semibold">Family Owned</div>
            <div className="text-blue-200 text-sm">Business</div>
          </div>
          <div className="text-center p-6 bg-blue-800 rounded-lg">
            <div className="text-white font-semibold">Established</div>
            <div className="text-blue-200 text-sm">Since 2007</div>
          </div>
          <div className="text-center p-6 bg-blue-800 rounded-lg">
            <div className="text-white font-semibold">Trusted &</div>
            <div className="text-blue-200 text-sm">Transparent</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;