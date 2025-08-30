import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            If you are looking for a reliable and trustworthy car service 
            and mechanical repairs without the price tag,{' '}
            <span className="text-yellow-300">call</span>{' '}
            <span className="text-yellow-300">All Brakes & Mechanical</span>{' '}
            today!
          </h2>
          
          <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
            <Phone className="w-5 h-5" />
            <span>(03) 9749 5991</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;