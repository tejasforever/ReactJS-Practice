import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <section className="h-96 bg-gray-200 relative">
      {/* Map placeholder */}
      <div className="w-full h-full bg-gray-300 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8684447849934!2d144.69924231531785!3d-37.87999797972645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad67b0c8f5d5b3b%3A0x5045675218ce6e0!2sHoppers%20Crossing%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1629794729405!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Location markers */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-600 p-3 rounded-full shadow-lg animate-bounce">
            <MapPin className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;