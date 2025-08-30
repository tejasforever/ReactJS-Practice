import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-red-50 relative">
      {/* Red accent lines */}
      <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>
      <div className="absolute right-0 top-0 w-2 h-full bg-red-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About{' '}
              <span className="text-red-600">All Brakes & Mechanical</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are a family-owned and operated business that has been serving the Hoppers 
                Crossing and surrounding areas for over 25 years. Our team of experienced 
                mechanics are dedicated to providing quality automotive services at competitive prices.
              </p>
              
              <p>
                Our shop is conveniently located in the heart of Hoppers Crossing and we offer a wide 
                range of automotive services including brake repairs, engine diagnostics, clutch 
                replacements, air conditioning services, and general mechanical repairs.
              </p>
              
              <p>
                We understand that your vehicle is an important investment, and we're committed to 
                helping you maintain it properly. Our experienced mechanics use the latest diagnostic 
                equipment and quality parts to ensure your vehicle runs safely and efficiently.
              </p>
              
              <p>
                At All Brakes & Mechanical, we believe in honest, transparent pricing and quality 
                workmanship. We'll always provide you with a detailed quote before any work begins, 
                and we stand behind our work with comprehensive warranties.
              </p>
            </div>
          </div>

          {/* Right - Mechanic image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional mechanic at work"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;