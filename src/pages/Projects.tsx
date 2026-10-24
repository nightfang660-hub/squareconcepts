import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Section from '@/src/components/Section';
import { cn } from '@/src/lib/utils';
import { projects } from '@/src/data/projects';
import SEO from '@/src/components/SEO';

const categories = ['All', 'Independent House', 'Duplex', 'Apartment', 'Residential'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.projectType.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="pt-20">
      <SEO 
        title="Completed Luxury Interior Projects in Hyderabad | Square Concepts"
        description="Explore luxury residential interior design projects completed by Square Concepts across Hyderabad. Premium villas, duplexes, and penthouses in Jubilee Hills, Banjara Hills, and Gachibowli."
        path="/projects"
        keywords="interior design projects Hyderabad, completed interiors Jubilee Hills, luxury villas Hyderabad, duplex interior design Hyderabad, Square Concepts portfolio"
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600"
          alt="Completed Projects"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary-bg/75" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-none whitespace-nowrap">
            Completed <span className="text-accent">Projects</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Explore our curated portfolio of completed residences, apartments, and duplexes crafted across Hyderabad.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Filter and Grid */}
      <Section noPadding className="bg-primary-bg min-h-screen pt-12 pb-16">
        <div className="w-full">
          {/* Category Filter Bar */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 p-1.5 bg-white rounded-full border border-text-dark/5 smooth-shadow overflow-x-auto max-w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                    activeFilter === cat 
                      ? "bg-accent text-white shadow-lg shadow-accent/20" 
                      : "text-text-dark/60 hover:text-text-dark hover:bg-black/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl overflow-hidden bg-white hover-lift border border-text-dark/5"
                >
                  <Link to={`/projects/${project.id}`} className="block relative aspect-square md:aspect-[4/5] lg:aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/90 via-secondary-bg/30 to-transparent group-hover:bg-accent/30 transition-colors duration-500" />
                    


                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent mb-1 block">
                              {project.projectType}
                            </span>
                            <h3 className="text-xl font-bold text-text-dark">
                              {project.clientName}
                            </h3>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center text-text-dark group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all shrink-0">
                            <ArrowRight size={18} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-text-dark/60 font-medium pt-2 border-t border-text-dark/5">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-accent" /> {project.location}
                          </span>
                          <span className="text-accent font-semibold">View Case Study →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section noPadding className="bg-primary-bg pt-8 pb-16">
        <div className="w-full">
          <div className="bg-secondary-bg rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-6">Have a similar project in mind?</h2>
              <p className="text-text-light/60 text-lg md:text-xl mb-10 leading-relaxed font-sans max-w-2xl mx-auto">
                Our interior specialists are ready to turn your apartment, villa, or duplex into an extraordinary living experience.
              </p>
              <Link
                to="/consultation"
                className="bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl transition-all inline-flex items-center gap-3 group shadow-xl shadow-accent/20"
              >
                Schedule Consultation
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
