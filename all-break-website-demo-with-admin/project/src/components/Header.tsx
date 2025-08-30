import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useSiteSettings } from '../hooks/useData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { settings } = useSiteSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['ABOUT US', 'SERVICES', 'WHY CHOOSE US', 'TESTIMONIALS'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {settings?.site_title?.split(' ')[0] || 'All Brakes'}
              </h1>
              <p className="text-lg text-gray-700">
                {settings?.site_title?.split(' ').slice(1).join(' ') || '& Mechanical'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-800 text-white px-6 py-2 rounded font-medium hover:bg-blue-900 transition-colors duration-200">
              Book Service
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded font-medium hover:bg-gray-50 transition-colors duration-200">
              More Services
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-blue-800 text-white px-6 py-2 rounded font-medium">
                  Book Service
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded font-medium">
                  More Services
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;