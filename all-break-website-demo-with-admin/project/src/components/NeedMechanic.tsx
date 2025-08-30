import React from 'react';

const NeedMechanic = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need A <span className="text-red-500">Mechanic?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for professional automotive service and mechanical repairs. 
            We're here to keep your vehicle running smoothly.
          </p>
          
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105">
            Book Service
          </button>
        </div>
      </div>
      
      {/* Decorative car parts */}
      <div className="absolute bottom-0 left-0 opacity-10">
        <img src="https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=200" alt="" className="w-32 h-32 object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10">
        <img src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=200" alt="" className="w-32 h-32 object-cover" />
      </div>
    </section>
  );
};

export default NeedMechanic;