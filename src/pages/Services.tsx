import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Box, 
  DoorClosed, 
  Armchair, 
  Layout, 
  PencilRuler, 
  Square, 
  Smartphone,
  ChevronDown,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { defaultVariants } from '@/src/components/Motion';
import SEO from '@/src/components/SEO';

export interface PrimaryService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  icon: ReactNode;
  tag?: string;
  highlights: string[];
}

export const primaryServices: PrimaryService[] = [
  {
    id: 'modular-kitchens',
    number: '01',
    title: 'Modular Kitchens',
    shortDesc: 'Highly efficient, ergonomic kitchen systems engineered with precision German hardware, moisture-resistant carcases, and luxury finishes.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200',
    icon: <Box size={22} />,
    tag: 'German Hardware',
    highlights: ['Moisture Resistant Carcases', 'Soft-Close Motion Hardware', 'Intelligent Corner Storage']
  },
  {
    id: 'custom-wardrobes',
    number: '02',
    title: 'Custom Wardrobes',
    shortDesc: 'Bespoke floor-to-ceiling storage solutions with sensor-integrated LED illumination, smooth sliding systems, and modular organizers.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    icon: <DoorClosed size={22} />,
    tag: 'Bespoke Storage',
    highlights: ['Walk-in & Sliding Systems', 'Integrated Sensor Lighting', 'Tailored Internal Layouts']
  },
  {
    id: 'residential-interiors',
    number: '03',
    title: 'Residential Interior Design',
    shortDesc: 'Comprehensive turnkey home design balancing timeless aesthetics with the daily routines, ergonomics, and comfort of modern families.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    icon: <Armchair size={22} />,
    tag: 'Turnkey Living',
    highlights: ['Ergonomic Space Planning', 'Custom Furniture & Decor', 'End-to-End Site Execution']
  },
  {
    id: '3d-design',
    number: '04',
    title: '3D Design & Visualization',
    shortDesc: 'Photorealistic 4K 3D visualizations, material simulations, and immersive VR walkthroughs before any physical execution begins.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    icon: <Layout size={22} />,
    tag: 'Photorealistic VR',
    highlights: ['4K Photorealistic Renders', 'Virtual Reality Walkthroughs', 'Day & Night Lighting Studies']
  },
  {
    id: 'furniture',
    number: '05',
    title: 'Furniture Customization',
    shortDesc: 'Handcrafted heirloom-grade furniture pieces custom-built to your exact room proportions, premium fabrics, and artisanal wood finishes.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    icon: <PencilRuler size={22} />,
    tag: 'Artisan Crafted',
    highlights: ['Kiln-Dried Solid Hardwood', 'High-Resilience Comfort Foams', 'Bespoke Designer Fabrics']
  },
  {
    id: 'wall-paneling',
    number: '06',
    title: 'Decorative Wall Paneling',
    shortDesc: 'Architectural acoustic slats, wood fluting, and luxury textured panels that add geometric depth, warmth, and sophistication to feature walls.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    icon: <Square size={22} />,
    tag: 'Architectural Slats',
    highlights: ['Acoustic Sound Absorption', 'Concealed LED Channels', 'Precision CNC Fluted Finishes']
  },
  {
    id: 'smart-home',
    number: '07',
    title: 'Smart Home Integration',
    shortDesc: 'Unified smart automation orchestrating ambient circadian lighting, climate control, motorized drapery, and smart biometric security.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
    icon: <Smartphone size={22} />,
    tag: 'Smart Automation',
    highlights: ['Voice & Smartphone Control', 'Automated Mood Lighting', 'Smart Biometric Access']
  }
];

const supportingServices = [
  { title: 'Custom Joinery & Millwork', description: 'Precision engineered architectural cabinetry tailored to your spaces.' },
  { title: 'Material & Texture Consultancy', description: 'Curating veneers, stones, Italian laminates, and upholstery.' },
  { title: 'Acoustic & Mood Optimization', description: 'Fine-tuning audio acoustics and ambient environmental controls.' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>('all');

  const displayedServices = selectedService === 'all' 
    ? primaryServices 
    : primaryServices.filter(s => s.id === selectedService);

  return (
    <div className="pt-20 bg-primary-bg min-h-screen">
      <SEO 
        title="Interior Design Services in Hyderabad | Square Concepts"
        description="Explore our bespoke interior solutions in Hyderabad: Modular Kitchens, Custom Wardrobes, Turnkey Residential Interiors, 3D Visualization, Decorative Wall Paneling & Smart Home Integration."
        path="/services"
        keywords="Interior design services Hyderabad, modular kitchens Hyderabad, custom wardrobes Hyderabad, 3D interior design Hyderabad, smart home automation Hyderabad, wall paneling Jubilee Hills"
      />
      {/* Hero */}
      <section className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-18 px-6 sm:px-8 lg:px-12 overflow-hidden min-h-[32vh] sm:min-h-[35vh] md:min-h-[38vh] flex items-center justify-center text-center">
         {/* Background Image & Overlay */}
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000" 
              alt="Our Services Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
         </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full -translate-y-3 sm:-translate-y-5 md:-translate-y-6">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-4 md:mb-5 leading-none whitespace-nowrap"
           >
             Our <span className="text-accent">Services</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 font-light"
           >
             Discover a comprehensive suite of interior solutions designed to elevate your living experience. 
             Curating every detail to reflect your unique architectural legacy.
           </motion.p>

           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="w-24 h-1 bg-accent mx-auto rounded-full"
           />
        </div>
      </section>

      {/* Services List matching Dropdown */}
      <Section className="bg-primary-bg pt-8 md:pt-10 pb-10 md:pb-12">
        {/* Dropdown Filter Bar */}
        <div className="mb-10 bg-white p-5 md:p-6 rounded-3xl border border-text-dark/10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-1.5">
                <Layers size={14} /> Services Directory
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-dark">
                All Services According to Menu
              </h2>
              <p className="text-text-dark/60 text-sm mt-1">
                Explore each bespoke service in the exact order featured in our navigation menu.
              </p>
            </div>

            {/* Interactive Dropdown Selector */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <label htmlFor="service-dropdown-select" className="text-xs font-bold uppercase tracking-wider text-text-dark/70 sm:whitespace-nowrap">
                Select Service:
              </label>
              <div className="relative min-w-[280px]">
                <select
                  id="service-dropdown-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-primary-bg border border-text-dark/15 rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-text-dark hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer transition-all shadow-sm"
                >
                  <option value="all">View All Services (7 in Menu)</option>
                  {primaryServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.number}. {service.title}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-dark/50 pointer-events-none" />
              </div>

              {selectedService !== 'all' && (
                <button
                  onClick={() => setSelectedService('all')}
                  className="px-4 py-2.5 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold text-xs transition-colors shrink-0"
                >
                  Show All (7)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Cards List in Dropdown Order */}
        <div className="space-y-6">
          {displayedServices.map((service) => (
            <motion.div 
              key={service.id} 
              variants={defaultVariants}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to={`/services/${service.id}`}
                className="group block rounded-[28px] overflow-hidden border border-text-dark/10 bg-white hover:bg-secondary-bg p-4 md:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Image Thumbnail */}
                  <div className="w-full md:w-72 lg:w-80 aspect-[16/10] md:aspect-square shrink-0 rounded-[20px] overflow-hidden bg-primary-bg relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white font-mono font-bold text-xs px-3 py-1 rounded-full border border-white/10">
                      {service.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow w-full text-left">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300">
                        {service.icon}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-text-dark group-hover:text-white transition-colors">
                        {service.title}
                      </h3>

                      {service.tag && (
                        <span className="inline-flex items-center gap-1 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors">
                          <Sparkles size={11} /> {service.tag}
                        </span>
                      )}
                    </div>

                    <p className="text-text-dark/65 group-hover:text-white/70 transition-colors text-base md:text-lg leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                      {service.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center gap-1.5 text-xs bg-primary-bg group-hover:bg-white/10 text-text-dark/70 group-hover:text-white/90 px-3 py-1 rounded-lg border border-text-dark/5 group-hover:border-white/10 transition-colors"
                        >
                          <CheckCircle2 size={12} className="text-accent group-hover:text-accent-light" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Button Link */}
                    <div className="mt-4 pt-3 border-t border-text-dark/10 group-hover:border-white/10 flex lg:hidden items-center justify-between text-accent font-bold text-sm">
                      <span>Explore {service.title}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* Desktop Arrow Action Circle */}
                  <div className="hidden lg:flex w-14 h-14 rounded-full border border-text-dark/15 group-hover:border-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center text-text-dark/30 transition-all duration-300 shrink-0 mr-2">
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Supporting Services Grid */}
      <Section className="bg-white border-y border-text-dark/5 pt-8 md:pt-10 pb-8 md:pb-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Value Added Services</h4>
           <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 italic">Supporting Design Elements</h2>
           <p className="text-text-dark/60 text-base md:text-lg">Every minor detail contributes to the harmony of the entire space. We excel in these specialties.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {supportingServices.map((service, idx) => (
             <motion.div 
               key={service.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="p-8 md:p-10 bg-primary-bg rounded-3xl border border-text-dark/5 group hover:bg-accent transition-all duration-500"
             >
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-accent transition-all">
                   <ChevronRight size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-text-dark/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="bg-secondary-bg pt-8 md:pt-10 pb-6 md:pb-8">
         <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10">
            <div className="max-w-xl">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">Ready to build your <br /> dream interior?</h2>
               <p className="text-text-light/60 text-base md:text-lg mb-6">Schedule a session with our design consultant to explore these services in depth for your home.</p>
               <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                     {[
                       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
                     ].map((src, i) => (
                       <div key={i} className="w-11 h-11 rounded-full border-2 border-secondary-bg bg-accent/20 overflow-hidden">
                          <img src={src} alt="User" className="w-full h-full object-cover" />
                       </div>
                     ))}
                  </div>
                  <div className="text-sm font-bold text-accent">500+ Happy Homeowners</div>
               </div>
            </div>
            <Link 
              to="/consultation"
              className="bg-accent hover:bg-accent-hover text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all shadow-2xl shadow-accent/20 flex items-center gap-3 whitespace-nowrap self-start md:self-auto"
            >
              Get Expert Advice <ArrowRight size={22} />
            </Link>
         </div>
      </Section>
    </div>
  );
}
