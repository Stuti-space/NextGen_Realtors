
import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Building, Users, Home } from "lucide-react";

const featuresData = [
  {
    id: 1,
    icon: <Building className="h-12 w-12 text-gold" />,
    title: "Architectural Excellence",
    description: "Our designs push boundaries while maintaining perfect harmony with surroundings and lifestyle needs."
  },
  {
    id: 2,
    icon: <Home className="h-12 w-12 text-gold" />,
    title: "Premium Materials",
    description: "We source only the finest materials from around the world, ensuring durability and timeless elegance."
  },
  {
    id: 3,
    icon: <Users className="h-12 w-12 text-gold" />,
    title: "Expert Team",
    description: "Our team consists of award-winning architects, engineers, and designers with decades of experience."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="section-padding bg-dark-blue">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-4">Why Choose NextGen</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-16">
            We combine cutting-edge design, superior craftsmanship, and sustainable practices to create properties that set new industry standards.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <ScrollAnimation key={feature.id}>
              <div className="bg-charcoal p-8 rounded-lg border border-gold/20 h-full flex flex-col items-center text-center">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
