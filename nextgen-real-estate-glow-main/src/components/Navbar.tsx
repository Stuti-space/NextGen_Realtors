
import React, { useState, useEffect } from 'react';
import { Menu } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-dark-blue/95 shadow-md py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-gold font-semibold text-2xl">
          NextGen <span className="text-white font-light">Realtors</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
          <a href="#projects" className="text-white hover:text-gold transition-colors">Projects</a>
          <a href="#why-us" className="text-white hover:text-gold transition-colors">Why Us</a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-blue/95 shadow-md py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-gold transition-colors">Projects</a>
            <a href="#why-us" className="text-white hover:text-gold transition-colors">Why Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
