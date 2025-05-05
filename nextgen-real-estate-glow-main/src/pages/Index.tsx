import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Change the page title
    document.title = "NextGen Realtors | Luxury Real Estate in Lucknow";
    
    // Smooth scrolling to sections when clicking on navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark-blue">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
