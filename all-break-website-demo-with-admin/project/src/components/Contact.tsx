import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-red-50 relative">
      {/* Red accent lines */}
      <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>
      <div className="absolute right-0 top-0 w-2 h-full bg-red-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mechanic image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional mechanic"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right - Contact Form */}
          <div className="bg-blue-900 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quick <span className="text-red-400">Inquiry</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors duration-200"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors duration-200"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors duration-200"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors duration-200"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors duration-200 resize-none"
                    placeholder="Message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;