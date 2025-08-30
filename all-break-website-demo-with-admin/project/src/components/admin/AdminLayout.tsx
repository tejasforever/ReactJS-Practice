import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Settings, Wrench, Star, Users, FileText, LogOut, Home } from 'lucide-react';
import { signOut } from '../../lib/supabase';
import toast from 'react-hot-toast';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
      navigate('/admin/login');
    }
  };

  const navItems = [
    { path: '/admin', icon: <Settings className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/admin/site-settings', icon: <Settings className="w-5 h-5" />, label: 'Site Settings' },
    { path: '/admin/services', icon: <Wrench className="w-5 h-5" />, label: 'Services' },
    { path: '/admin/reviews', icon: <Star className="w-5 h-5" />, label: 'Reviews' },
    { path: '/admin/features', icon: <Users className="w-5 h-5" />, label: 'Why Choose Us' },
    { path: '/admin/about', icon: <FileText className="w-5 h-5" />, label: 'About Content' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold">All Brakes</h1>
              <p className="text-sm text-blue-200">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-800">
          <Link
            to="/"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-800 hover:text-white transition-colors duration-200 mb-2"
          >
            <Home className="w-5 h-5" />
            <span>View Site</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors duration-200 w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b p-6">
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
        </header>
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;