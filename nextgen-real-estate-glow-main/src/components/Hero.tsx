
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-gold">NextGen</span> Realtors
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Building the future of living in Lucknow.</p>
          <p className="text-white/70 text-lg mb-8 max-w-xl">
            We create luxury properties that combine innovative design with unparalleled craftsmanship,
            setting new standards in real estate excellence in Uttar Pradesh.
          </p>
          
          <Button 
            className="bg-gold hover:bg-gold/90 text-dark-blue text-lg py-6 px-8"
            onClick={() => setContactFormOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </section>
  );
};

export default Hero;
