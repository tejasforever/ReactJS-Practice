import React from 'react';
import { Star } from 'lucide-react';
import { useSiteSettings } from '../hooks/useData';

const Hero = () => {
  const { settings, loading } = useSiteSettings();

  if (loading) {
    return (
      <section className="pt-24 pb-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {settings?.hero_title || 'Reliable Mechanic in Hoppers Crossing, Melbourne'}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {settings?.hero_description || 'Experience top-notch automotive service with our expert mechanics.'}
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-gray-900">
                Contact Us
              </div>
              <div className="text-2xl font-bold text-blue-800">
                {settings?.phone_number || '(03) 9749 5991'}
              </div>
            </div>

            {/* Google reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
                <span className="font-medium">See Our 5 Star Reviews on</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Garage image */}
          <div className="relative">
            <div className="relative bg-white p-4 rounded-lg shadow-xl">
              <img
                src={settings?.hero_image_url || "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"}
                alt="Professional auto repair garage"
                className="w-full h-80 object-cover rounded"
              />
              
              {/* Quality badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg border-4 border-red-600">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;