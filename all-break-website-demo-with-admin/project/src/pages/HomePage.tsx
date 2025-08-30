import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import CallToAction from '../components/CallToAction';
import About from '../components/About';
import NeedMechanic from '../components/NeedMechanic';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <CallToAction />
      <About />
      <NeedMechanic />
      <Reviews />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;