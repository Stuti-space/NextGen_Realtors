
import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projectsData = [
  {
    id: 1,
    title: "Gomti Riverfront Residences",
    description: "A 30-story luxury residential tower with panoramic views of the Gomti River and world-class amenities.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    status: "Completed",
  },
  {
    id: 2,
    title: "The Residences at Hazratganj",
    description: "Premium apartments in the heart of Lucknow with private gardens and integrated smart home technology.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Awadh Heritage Villas",
    description: "Exclusive gated community featuring sustainable luxury villas inspired by Lucknow's Nawabi architecture.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    status: "Coming Soon",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-charcoal">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-4">Our Projects</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Showcasing our commitment to excellence through these signature developments that redefine modern living.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ScrollAnimation key={project.id} className={`delay-${index * 100}`}>
              <Card className="bg-dark-blue border-gold/20 overflow-hidden h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-gold">{project.title}</CardTitle>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Completed" 
                        ? "bg-green-900/30 text-green-400" 
                        : project.status === "In Progress" 
                          ? "bg-blue-900/30 text-blue-400" 
                          : "bg-amber-900/30 text-amber-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="#" className="text-gold hover:text-gold/80 transition-colors text-sm flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
