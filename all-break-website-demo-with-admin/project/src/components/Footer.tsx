import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useSiteSettings } from '../hooks/useData';

const Footer = () => {
  const { settings } = useSiteSettings();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {settings?.site_title?.split(' ')[0] || 'All Brakes'}
                </h3>
                <p className="text-blue-200">
                  {settings?.site_title?.split(' ').slice(1).join(' ') || '& Mechanical'}
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {settings?.site_description || 'All Brakes & Mechanical is a family owned and operated business.'}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-blue-200">{settings?.phone_number || '(03) 9749 5991'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-blue-200">{settings?.email || 'info@allbrakes.com.au'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-blue-200">{settings?.address || 'Hoppers Crossing, Melbourne VIC'}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Brake Repairs',
                'Engine Service',
                'Clutch Replacement',
                'Air Conditioning',
                'Log Book Servicing',
                'General Repairs'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2 text-sm">
              {settings?.business_hours ? (
                Object.entries(settings.business_hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-blue-200">{day}</span>
                    <span className={hours === 'Closed' ? 'text-red-400' : 'text-white'}>{hours}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Mon - Fri</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Saturday</span>
                    <span className="text-white">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            Copyright © 2025 {settings?.site_title || 'All Brakes & Mechanical'} Pty Ltd. All Rights Reserved | Privacy Policy | Terms & Conditions | Sitemap
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;