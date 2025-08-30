import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, Star, Users, FileText, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Services', value: '5', icon: <Wrench className="w-6 h-6" />, color: 'bg-blue-500' },
    { label: 'Customer Reviews', value: '12', icon: <Star className="w-6 h-6" />, color: 'bg-yellow-500' },
    { label: 'Features Listed', value: '6', icon: <Users className="w-6 h-6" />, color: 'bg-green-500' },
    { label: 'Content Sections', value: '8', icon: <FileText className="w-6 h-6" />, color: 'bg-purple-500' },
  ];

  const quickActions = [
    { title: 'Edit Site Settings', description: 'Update contact info, business hours', link: '/admin/site-settings', icon: <Settings className="w-8 h-8" /> },
    { title: 'Manage Services', description: 'Add, edit, or remove services', link: '/admin/services', icon: <Wrench className="w-8 h-8" /> },
    { title: 'Customer Reviews', description: 'Manage customer testimonials', link: '/admin/reviews', icon: <Star className="w-8 h-8" /> },
    { title: 'About Content', description: 'Update about section content', link: '/admin/about', icon: <FileText className="w-8 h-8" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Manage your automotive service website content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-all duration-200 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-800">
                  {action.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Site settings updated</span>
              <span className="text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">New service added</span>
              <span className="text-gray-400">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-600">Customer review approved</span>
              <span className="text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;