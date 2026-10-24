import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, Layout, Armchair, DoorClosed, Box, PencilRuler, Square, Smartphone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logoImage from '../logo.image.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'Modular Kitchens', icon: <Box size={18} />, path: '/services/modular-kitchens' },
  { name: 'Custom Wardrobes', icon: <DoorClosed size={18} />, path: '/services/custom-wardrobes' },
  { name: 'Residential Interior Design', icon: <Armchair size={18} />, path: '/services/residential-interiors' },
  { name: '3D Design & Visualization', icon: <Layout size={18} />, path: '/services/3d-design' },
  { name: 'Furniture Customization', icon: <PencilRuler size={18} />, path: '/services/furniture' },
  { name: 'Decorative Wall Paneling', icon: <Square size={18} />, path: '/services/wall-paneling' },
  { name: 'Smart Home Integration', icon: <Smartphone size={18} />, path: '/services/smart-home' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-8 lg:px-12 bg-white/95 backdrop-blur-md border-b border-text-dark/5',
        isScrolled ? 'py-3 shadow-sm' : 'py-4'
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        <Link to="/" className="flex items-center group">
          <img src={logoImage} alt="Square Concepts Logo" className="h-16 w-auto transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/about' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="/services"
              className={cn(
                'text-sm font-bold tracking-tight transition-colors hover:text-accent py-1 flex items-center gap-1 cursor-pointer',
                location.pathname.startsWith('/services') ? 'text-accent' : 'text-text-dark/70'
              )}
            >
              Services
              <ChevronDown size={14} className={cn("transition-transform duration-300", isDropdownOpen && "rotate-180")} />
            </Link>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl smooth-shadow border border-text-dark/5 p-2 flex flex-col gap-1 shadow-2xl"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-bg transition-all group/item whitespace-nowrap"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-bg flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-sm font-bold text-text-dark/75 group-hover/item:text-accent transition-colors whitespace-nowrap">
                        {service.name}
                      </span>
                    </Link>
                  ))}

                  <div className="pt-1.5 mt-1 border-t border-text-dark/5">
                    <Link
                      to="/services"
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-primary-bg/70 hover:bg-accent hover:text-white text-accent font-bold text-xs uppercase tracking-wider transition-all group/all"
                    >
                      <span>View All Services</span>
                      <ArrowRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/projects"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname.startsWith('/projects') ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/contact' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Contact
          </Link>

          <Link
            to="/consultation"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-xl hover:shadow-accent/20 flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-bg border-b border-text-dark/5 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              <Link to="/" className={cn("text-lg font-bold py-2 border-b border-text-dark/5", location.pathname === '/' ? "text-accent" : "text-text-dark")}>Home</Link>
              <Link to="/about" className={cn("text-lg font-bold py-2 border-b border-text-dark/5", location.pathname === '/about' ? "text-accent" : "text-text-dark")}>About</Link>
              {/* Services Accordion Dropdown */}
              <div className="border-b border-text-dark/5 py-1">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/services" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold py-2 transition-colors", 
                      location.pathname.startsWith('/services') ? "text-accent" : "text-text-dark"
                    )}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    aria-label="Toggle services list"
                    className="p-2 text-text-dark/60 hover:text-accent cursor-pointer transition-colors"
                  >
                    <ChevronDown 
                      size={20} 
                      className={cn("transition-transform duration-300", isMobileServicesOpen && "rotate-180 text-accent")} 
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-1 pr-1 pb-3 flex flex-col gap-1.5"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-all",
                            location.pathname === service.path
                              ? "bg-accent/10 text-accent font-bold"
                              : "text-text-dark/70 hover:bg-white hover:text-accent"
                          )}
                        >
                          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-accent shadow-xs shrink-0">
                            {service.icon}
                          </div>
                          <span>{service.name}</span>
                        </Link>
                      ))}

                      <Link
                        to="/services"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="flex items-center justify-between px-3.5 py-2.5 mt-1 rounded-xl bg-accent text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                      >
                        <span>View All Services</span>
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/projects" className={cn("text-lg font-bold py-2 border-b border-text-dark/5", location.pathname.startsWith('/projects') ? "text-accent" : "text-text-dark")}>Projects</Link>
              <Link to="/contact" className={cn("text-lg font-bold py-2 border-b border-text-dark/5", location.pathname === '/contact' ? "text-accent" : "text-text-dark")}>Contact</Link>
              <Link
                to="/consultation"
                className="bg-accent text-white px-6 py-4 rounded-xl text-center font-bold mt-4"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
