export interface SiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  phone_number: string;
  email: string;
  address: string;
  business_hours: Record<string, string>;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_url: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
  color_from: string;
  color_to: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  customer_name: string;
  rating: number;
  review_text: string;
  avatar_url: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AboutContent {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
}