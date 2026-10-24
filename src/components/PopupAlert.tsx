import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, PhoneCall, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/src/data/projects';

export default function PopupAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user previously closed popup
    const isDismissedSession = sessionStorage.getItem('square_concepts_popup_dismissed');
    const isDismissedMobile = localStorage.getItem('square_concepts_popup_dismissed_mobile');
    if (isDismissedSession || isDismissedMobile) {
      return;
    }

    const timer = setTimeout(() => {
      const dismissedNow = 
        sessionStorage.getItem('square_concepts_popup_dismissed') || 
        localStorage.getItem('square_concepts_popup_dismissed_mobile');
      if (!dismissedNow) {
        setIsOpen(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('square_concepts_popup_dismissed', 'true');
    localStorage.setItem('square_concepts_popup_dismissed_mobile', 'true');
  };

  const handleBookConsultation = () => {
    handleClose();
    navigate('/consultation');
  };

  if (!isOpen) return null;

  const currentProject = projects[activeIndex] || projects[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-secondary-bg/75 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-primary-bg rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[720px] max-h-[92vh] overflow-y-auto relative border border-text-dark/5 p-5 sm:p-6"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              aria-label="Close alert"
              className="absolute top-3 right-3 text-gray-500 hover:text-accent transition-colors z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm hover:shadow-md cursor-pointer"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Header */}
            <div className="text-center mb-5 pr-8 pl-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-full text-[11px] font-bold uppercase tracking-widest mb-2 border border-accent/20">
                <Sparkles size={12} />
                <span>Recently Completed Projects</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-text-dark leading-tight tracking-tight">
                Elevate Your Space & <span className="text-accent">Start Your Design Journey!</span>
              </h2>
              <p className="text-gray-500 font-medium text-xs mt-1">
                Explore our handed-over bespoke residences crafted with precision in Hyderabad
              </p>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              
              {/* Left Column (Project Details Card) */}
              <div className="flex flex-col justify-between">
                <div className="relative bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-4 sm:p-5 mb-3 flex-grow overflow-hidden flex flex-col justify-between">
                  {/* Left Accent Border */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-accent rounded-r-full z-10" />
                  
                  <div className="relative min-h-[145px] flex flex-col">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col h-full"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                            {currentProject.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                            <CheckCircle2 size={11} /> Handed Over
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-display font-bold text-gray-900 leading-snug mb-1">
                          {currentProject.title}
                        </h3>

                        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2 font-medium">
                          <span className="inline-flex items-center gap-1 text-gray-600">
                            <MapPin size={12} className="text-accent" />
                            {currentProject.location}
                          </span>
                          <span>•</span>
                          <span>{currentProject.area}</span>
                        </div>

                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                          {currentProject.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Progress indicators */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Project {activeIndex + 1} of {projects.length}
                    </span>
                    <div className="flex gap-1.5">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            i === activeIndex ? 'w-5 bg-accent' : 'w-1.5 bg-gray-200 hover:bg-gray-300'
                          }`}
                          aria-label={`View project ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleBookConsultation}
                  className="w-full bg-accent hover:bg-accent-hover text-white px-4 py-3.5 rounded-xl font-bold transition-all shadow-md shadow-accent/20 flex items-center justify-center gap-2 text-xs sm:text-sm group cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column (Project Image & Instant WhatsApp/Call) */}
              <div className="flex flex-col h-full justify-between">
                <div className="relative rounded-2xl overflow-hidden shadow-md mb-3 flex-grow min-h-[180px] sm:min-h-[200px] bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeIndex}
                      src={currentProject.image} 
                      alt={currentProject.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold drop-shadow-sm truncate">{currentProject.clientName}'s Residence</p>
                    <p className="text-[10px] text-white/80 drop-shadow-sm">{currentProject.projectType}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href={`https://wa.me/919010106877?text=${encodeURIComponent(
                      `Hi Square Concepts, I was viewing your completed project "${currentProject.title}" and would like to consult on my space.`
                    )}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-white border border-[#25D366] hover:bg-[#25D366] text-[#25D366] hover:text-white py-2.5 px-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-xs group"
                  >
                    <MessageCircle size={15} className="group-hover:fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="tel:+919010106877" 
                    className="bg-white border border-secondary-bg hover:bg-secondary-bg text-secondary-bg hover:text-white py-2.5 px-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-xs group"
                  >
                    <PhoneCall size={15} className="group-hover:fill-current" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
