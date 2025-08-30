import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { supabase } from '../../lib/supabase';
import { SiteSettings as SiteSettingsType } from '../../types/database';
import toast from 'react-hot-toast';
import { Save } from 'lucide-react';

const schema = yup.object({
  site_title: yup.string().required('Site title is required'),
  site_description: yup.string().required('Site description is required'),
  phone_number: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  hero_title: yup.string().required('Hero title is required'),
  hero_subtitle: yup.string().required('Hero subtitle is required'),
  hero_description: yup.string().required('Hero description is required'),
  hero_image_url: yup.string().url('Invalid URL').required('Hero image URL is required'),
});

type FormData = yup.InferType<typeof schema>;

const SiteSettings = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SiteSettingsType | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .single();
      
      if (error) throw error;
      setSettings(data);
      reset(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          id: settings?.id || '1',
          ...data,
          business_hours: {
            'Monday - Friday': '8:00 AM - 6:00 PM',
            'Saturday': '8:00 AM - 2:00 PM',
            'Sunday': 'Closed'
          },
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      toast.success('Settings updated successfully');
      fetchSettings();
    } catch (error) {
      toast.error('Error updating settings');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Site Settings</h2>
          <p className="text-gray-600">Update your website's basic information and content</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Title
              </label>
              <input
                {...register('site_title')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="All Brakes & Mechanical"
              />
              {errors.site_title && (
                <p className="text-red-500 text-sm mt-1">{errors.site_title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                {...register('phone_number')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(03) 9749 5991"
              />
              {errors.phone_number && (
                <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="info@allbrakes.com.au"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                {...register('address')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Hoppers Crossing, Melbourne VIC"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Description
            </label>
            <textarea
              {...register('site_description')}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Professional automotive service and repairs"
            />
            {errors.site_description && (
              <p className="text-red-500 text-sm mt-1">{errors.site_description.message}</p>
            )}
          </div>

          {/* Hero Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hero Section</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Title
                </label>
                <input
                  {...register('hero_title')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Reliable Mechanic in Hoppers Crossing, Melbourne"
                />
                {errors.hero_title && (
                  <p className="text-red-500 text-sm mt-1">{errors.hero_title.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Subtitle
                </label>
                <input
                  {...register('hero_subtitle')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Professional Automotive Service"
                />
                {errors.hero_subtitle && (
                  <p className="text-red-500 text-sm mt-1">{errors.hero_subtitle.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Description
                </label>
                <textarea
                  {...register('hero_description')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Experience top-notch automotive service..."
                />
                {errors.hero_description && (
                  <p className="text-red-500 text-sm mt-1">{errors.hero_description.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Image URL
                </label>
                <input
                  {...register('hero_image_url')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://images.pexels.com/..."
                />
                {errors.hero_image_url && (
                  <p className="text-red-500 text-sm mt-1">{errors.hero_image_url.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              <span>{loading ? 'Saving...' : 'Save Settings'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiteSettings;