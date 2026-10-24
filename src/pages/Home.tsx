import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import kitchenElements from '../kitchen.elements.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star, Quote, Sparkles, MapPin } from 'lucide-react';
import Section from '@/src/components/Section';
import { cn } from '@/src/lib/utils';
import { FadeIn, FadeInRight, ScaleIn, defaultVariants } from '@/src/components/Motion';
import { projects } from '@/src/data/projects';
import SEO from '@/src/components/SEO';

const stats = [
  { value: '500+', label: 'PROJECTS COMPLETED', target: 500, suffix: '+' },
  { value: '98%', label: 'HAPPY CLIENTS', target: 98, suffix: '%' },
  { value: '10+', label: 'YEARS OF EXPERTISE', target: 10, suffix: '+' },
  { value: '25+', label: 'DESIGN AWARDS', target: 25, suffix: '+' },
];

const Counter = ({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = target;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, isInView]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const services = [
  {
    title: 'Modular Kitchens',
    description: 'Highly efficient, ergonomic kitchen systems designed for modern living.',
    icon: '🍳',
    path: '/services/modular-kitchens',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Custom Wardrobes',
    description: 'Bespoke storage solutions that blend perfectly with your bedroom aesthetics.',
    icon: '🚪',
    path: '/services/custom-wardrobes',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Residential Interior Design',
    description: 'Personalized living spaces that reflect your lifestyle and values.',
    icon: '🏠',
    path: '/services/residential-interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: '3D Design & Visualization',
    description: 'Photorealistic views of your space before execution for absolute clarity.',
    icon: '📐',
    path: '/services/3d-design',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Furniture Customization',
    description: 'Handcrafted furniture pieces built to your exact specifications.',
    icon: '🛋️',
    path: '/services/furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Decorative Wall Paneling',
    description: 'Custom architectural textures, fluting, and acoustic finishes for luxury walls.',
    icon: '🪵',
    path: '/services/wall-paneling',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Smart Home Integration',
    description: 'Seamless tech integration for automated security, climate, and circadian lighting.',
    icon: '📱',
    path: '/services/smart-home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200'
  }
];


const processSteps = [
  { number: '01', title: 'Discovery', description: 'Understanding your vision, requirements, and budget through deep consultation.' },
  { number: '02', title: 'Planning', description: 'Meticulous space planning and conceptualizing the overall design direction.' },
  { number: '03', title: 'Design', description: 'Creating detailed 3D visualizations and selecting materials, finishes, and furniture.' },
  { number: '04', title: 'Execution', description: 'Translating designs into reality with precision craftsmanship and site management.' },
  { number: '05', title: 'Delivery', description: 'A final walkthrough and handover of your beautiful, ready-to-move-in space.' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Square Concepts transformed our outdated apartment into a modern sanctuary. Their attention to detail is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Tech Executive',
    content: 'The modular kitchen they designed is not only beautiful but incredibly functional. Every inch is utilized perfectly.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Art Curator',
    content: 'Professional, creative, and transparent throughout the process. Highly recommend for complete home transformations.',
    rating: 5
  }
];



const TestimonialSlider = ({ testimonials }: { testimonials: any[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-[300px] flex flex-col justify-center max-w-2xl mx-auto lg:ml-auto lg:mr-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6 md:p-8 rounded-[2rem] smooth-shadow relative overflow-hidden group"
        >
          <div className="absolute top-6 right-8 opacity-5 text-accent group-hover:scale-110 transition-transform duration-500">
            <Quote size={80} />
          </div>
          
          <div className="relative z-10">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="#E57A2E" stroke="#E57A2E" size={12} />
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-display font-medium text-text-dark/90 italic mb-8 leading-relaxed"
            >
              "{testimonials[current].content}"
            </motion.p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-xl border-2 border-accent/20">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="font-display font-bold text-lg">{testimonials[current].name}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-dark/40">{testimonials[current].role}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProjectCard: React.FC<{ project: any; idx: number }> = ({ project, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/projects/${project.id}`} className="block">
      <motion.div
        key={project.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: idx * 0.1 }
          }
        }}
        className="group relative aspect-[4/5] w-[300px] sm:w-[320px] md:w-[340px] overflow-hidden rounded-[1.75rem] smooth-shadow bg-secondary-bg"
      >
        {/* Video Layer */}
        {isHovered && project.videoId && (
          <div className="absolute inset-0 z-0">
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${project.videoId}`}
              title={project.title}
              className="w-[100%] h-[100%] scale-[2.2] origin-center"
              allow="autoplay; encrypted-media"
            />
          </div>
        )}

        {/* Thumbnail Layer */}
        <motion.img 
          src={project.image} 
          alt={project.title} 
          animate={{ opacity: isHovered && project.videoId ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-10" 
        />
        


        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/95 via-secondary-bg/40 to-transparent opacity-100 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-6 md:p-7 z-20">
          <span className="text-accent text-[11px] font-bold uppercase tracking-widest mb-1">{project.projectType || project.category}</span>
          <h3 className="text-text-light text-xl md:text-2xl font-bold mb-2">{project.clientName || project.title}</h3>
          <div className="flex items-center justify-between text-white/80 text-xs sm:text-sm font-medium pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5 text-white/60">
              <MapPin size={13} className="text-accent" /> {project.location}
            </span>
            <span className="flex items-center gap-1 text-accent font-semibold group-hover:gap-2 transition-all">
              View Project <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="w-full">
      <SEO 
        title="Square Concepts Hyderabad | Luxury Interior Designers & Modular Kitchens"
        description="Square Concepts is Hyderabad's premier luxury interior design studio located in Jubilee Hills. We specialize in bespoke modular kitchens, custom wardrobes, turnkey residential interiors, and 3D architectural visualization across Hyderabad."
        path="/"
        keywords="Square Concepts, Square Concepts Hyderabad, luxury interior designers Hyderabad, best modular kitchens Hyderabad, interior designers Jubilee Hills, custom wardrobes Hyderabad, turnkey interior designers Hyderabad, 3D interior design Hyderabad"
      />
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-hero-gradient">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/5 -skew-x-[20deg] translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none text-accent/10" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="lg:col-span-7"
          >

            
            <FadeIn>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-display font-bold tracking-tight text-secondary-bg mb-8 leading-[1.15]">
                <span className="block">Elegant Spaces</span>
                <span className="block text-accent">Engineered to Perfection</span>
              </h1>
            </FadeIn>
            
            <FadeIn>
              <p className="text-xl text-secondary-bg/60 mb-12 max-w-lg leading-relaxed font-medium">
                A dialogue between organic warmth and structural integrity. We curate bespoke environments that balance industrial precision with the poetry of fine living.
              </p>
            </FadeIn>
            
            <FadeIn className="flex flex-wrap gap-4 items-center">
              <Link
                to="/projects"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:shadow-accent/30 flex items-center gap-2 group"
              >
                View Collections
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-secondary-bg/5 hover:bg-secondary-bg/10 backdrop-blur-md text-secondary-bg border border-secondary-bg/10 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 group"
              >
                Our Services
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn className="mt-8 pt-8 border-t border-text-dark/10 flex items-center gap-10">
               <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-secondary-bg">500+</span>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-secondary-bg/60 mt-1">Spaces</span>
               </div>
               <div className="w-px h-8 bg-text-dark/20" />
               <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-secondary-bg">12</span>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-secondary-bg/60 mt-1">Awards</span>
               </div>
            </FadeIn>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Layering */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 1" className="w-full h-full object-cover" />
                  </ScaleIn>
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-square">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 2" className="w-full h-full object-cover" />
                  </ScaleIn>
               </div>
               <div className="space-y-4">
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-square">
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 3" className="w-full h-full object-cover" />
                  </ScaleIn>
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 4" className="w-full h-full object-cover" />
                  </ScaleIn>
               </div>
            </div>

            <div className="absolute -inset-10 bg-accent/5 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <Section className="bg-primary-bg py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScaleIn className="relative">
            <div className="relative">
              {/* Decorative Background Box */}
              <div className="absolute -top-10 -left-10 w-full h-full bg-accent/5 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              
              <div className="aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden smooth-shadow relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" alt="Interior Design Excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              
              {/* Floating Stat/Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold leading-none">100%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-text-dark/40">Custom Design</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-px bg-text-dark/5 rotate-[35deg] pointer-events-none" />
          </ScaleIn>

          <div className="space-y-10">
            <FadeInRight>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-display font-bold tracking-tight text-secondary-bg mb-8 leading-[1.15]">
                <span className="block">Crafting Interiors That</span>
                <span className="block text-accent">Feel Like Home</span>
              </h2>
            </FadeInRight>
            
            <FadeInRight className="space-y-6 text-xl text-text-dark/60 leading-relaxed max-w-xl">
              <p>
                At Square Concepts, we combine creativity and precision to design interiors that are functional, elegant, and uniquely yours.
              </p>
              <p>
                We believe that a well-designed home is more than just aesthetics; it's about how the space feels and how it enhances your daily life.
              </p>
            </FadeInRight>
            
            <FadeInRight className="mt-10 pt-10 border-t border-text-dark/5 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-text-dark/50 italic">To redefine luxury through minimalist and practical design.</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-text-dark/50 italic">Excellence in delivery and transparency in every project.</p>
              </div>
            </FadeInRight>
            

          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section dark className="pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">What We Do</h4>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 text-white leading-tight">
            Comprehensive Design Solutions
          </h2>
          <p className="text-text-light/60 text-lg">
            From single-room makeovers to full-scale restorations, we provide end-to-end expertise for all your space requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110 duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors">{service.title}</h3>
                <p className="text-text-light/50 transition-colors mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.path} className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all">
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              {/* Image Preview Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-primary-bg overflow-visible pt-8 md:pt-10 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">Completed Projects</h2>
            <p className="text-text-dark/60 text-base md:text-lg mt-2">Explore our recently completed bespoke home interiors crafted to perfection across Hyderabad</p>
          </FadeIn>
          <FadeIn className="hidden md:block">
            <Link
              to="/projects"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-xl hover:shadow-accent/20 flex items-center gap-2 group"
            >
              All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        <div className="relative overflow-hidden group/gallery">
          <div 
            className="flex gap-6 md:gap-7 whitespace-nowrap pause-on-hover"
            style={{ 
              width: "max-content",
              animation: "scroll 40s linear infinite" 
            }}
          >
            {[...projects, ...projects].map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="w-[300px] sm:w-[320px] md:w-[340px] shrink-0 whitespace-normal">
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Projects Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-accent/25 hover:shadow-xl transition-all active:scale-95 group"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white border-y border-text-dark/5 relative pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight text-secondary-bg">
            <span className="block">The Smooth Path To</span>
            <span className="block text-accent">Your Dream Space</span>
          </h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group p-6 rounded-[2rem] hover:bg-primary-bg transition-all duration-500"
              >
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-full bg-white border border-accent/20 flex items-center justify-center relative z-10 shadow-xl group-hover:bg-accent group-hover:border-accent group-hover:shadow-accent/30 transition-all duration-500">
                    <span className="text-3xl font-display font-bold group-hover:text-white transition-colors text-text-dark/80">{step.number}</span>
                  </div>
                  {/* Background Number Shadow */}
                  <span className="absolute -top-4 -right-4 text-7xl font-display font-bold text-accent/5 group-hover:text-accent/10 transition-colors pointer-events-none select-none">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-text-dark/60 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>



      {/* Stats Section */}
      <Section className="py-20 md:py-24 relative overflow-hidden bg-[#858C94]">
        {/* Background Image & Cement Grey Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={kitchenElements} 
            alt="Kitchen Elements" 
            loading="eager"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-[#7B838C]/85 backdrop-blur-[1px]" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={defaultVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-accent mb-2 tracking-tight drop-shadow-sm">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-white/90 font-bold uppercase tracking-widest text-[11px] md:text-xs drop-shadow-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-primary-bg pb-12 md:pb-16 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:-mt-10">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Reviews</h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 tracking-tight whitespace-nowrap">What Our Clients Are Saying</h2>
            <p className="text-text-dark/60 text-lg mb-8 leading-relaxed max-w-xl">
              Don't just take our word for it. Hear from those who have already transformed their living experiences with us.
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="#E57A2E" stroke="#E57A2E" size={20} />
              ))}
              <span className="ml-2 font-bold">(5.0 Average)</span>
            </div>
          </div>

          <div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative bg-secondary-bg">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent/40 to-transparent scale-150" />
          </div>
          
          <div className="relative z-10 px-8 py-12 md:py-16 text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 tracking-tight max-w-4xl">
              Ready to Transform Your <br /> Space Into a Timeless One?
            </h2>
            <p className="text-text-light/60 text-lg mb-8 max-w-xl leading-relaxed">
              Join 500+ happy homeowners who have elevated their lifestyle with our expert interior design solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/consultation"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group"
              >
                Book Your Consultation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center flex-wrap opacity-50 grayscale transition-all hover:grayscale-0">
               <span className="font-bold text-white/60">Trusted by:</span>
               <div className="h-6 w-px bg-white/20 mx-2" />
               <div className="flex gap-8 text-xl font-display font-bold text-white italic tracking-tighter">
                  <span>LUXE HOME</span>
                  <span>PRESTIGE</span>
                  <span>DESIGNHUB</span>
                  <span>VOGUE</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
