
import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-blue">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-12">About Us</h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation className="order-2 md:order-1">
            <p className="text-white/80 mb-6">
              Founded in 2010 in Lucknow, NextGen Realtors has established itself as a pioneer in luxury real estate development, 
              known for creating distinctive properties that blend innovative design with exceptional quality.
            </p>
            <p className="text-white/80 mb-6">
              Our team of visionary architects, skilled craftsmen, and dedicated project managers work in harmony 
              to deliver residences that exceed expectations and stand the test of time in Uttar Pradesh.
            </p>
            <p className="text-white/80">
              With a portfolio spanning high-end residential towers, exclusive villa communities, and boutique 
              commercial spaces, we continue to shape Lucknow's skyline and set new benchmarks in architectural excellence.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold"></div>
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032&auto=format&fit=crop" 
                alt="Modern Architecture in Lucknow" 
                className="w-full h-auto rounded-md shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
