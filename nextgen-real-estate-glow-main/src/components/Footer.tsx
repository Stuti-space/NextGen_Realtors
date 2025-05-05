
import React from 'react';
import { MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold text-2xl font-bold mb-4">NextGen Realtors</h3>
            <p className="text-white/70 mb-4 max-w-xs">
              Setting new standards in luxury real estate with innovative design and uncompromising quality in Lucknow, India.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-gold transition-colors">Our Projects</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span className="text-white/70">123 Gomti Nagar, Lucknow, Uttar Pradesh 226010, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <span className="text-white/70">+91 (522) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <span className="text-white/70">info@nextgenrealtors.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} NextGen Realtors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
