import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, MessageSquare, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import SEO from '@/src/components/SEO';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters and spaces
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setName(val);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow numbers, +, spaces, and dashes
    const val = e.target.value.replace(/[^0-9+\s-]/g, '');
    setPhone(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Square Concepts Hyderabad | Studio in Jubilee Hills"
        description="Visit Square Concepts interior design studio in Jubilee Hills, Hyderabad. Contact our team at +91 9010106877 or visit H. No. 6-2-296/82/A/62, Plot No. 6, Jubilee Hills, Hyderabad 500033."
        path="/contact"
        keywords="Contact Square Concepts, interior studio Jubilee Hills, interior designers Hyderabad phone number, Square Concepts address Hyderabad"
      />
      {/* Header */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1600"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary-bg/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-6"
          >
            Contact Us
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-none whitespace-nowrap"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      <Section className="bg-primary-bg pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           {/* Form Column */}
           <div className="bg-white p-10 rounded-[32px] smooth-shadow border border-text-dark/5">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Send Us a Message</h2>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/5 p-12 rounded-2xl text-center flex flex-col items-center"
                >
                   <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6">
                      <Send size={24} />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                   <p className="text-text-dark/60">We'll get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setFormState('idle')}
                     className="mt-8 text-accent font-bold hover:underline"
                   >
                     Send another message
                   </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50" htmlFor="name">Full Name *</label>
                         <input 
                           required 
                           id="name" 
                           type="text" 
                           placeholder="e.g. Rajesh Sharma" 
                           value={name} 
                           onChange={handleNameChange} 
                           className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all text-sm" 
                         />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50" htmlFor="phone">Phone Number *</label>
                         <input 
                           required 
                           id="phone" 
                           type="tel" 
                           placeholder="+91 98765 43210" 
                           value={phone} 
                           onChange={handlePhoneChange} 
                           className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all text-sm" 
                         />
                      </div>
                   </div>

                   <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50" htmlFor="email">Email Address *</label>
                      <input 
                        required 
                        id="email" 
                        type="email" 
                        placeholder="rajesh@example.com" 
                        className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all text-sm" 
                      />
                   </div>

                   <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50" htmlFor="service">Interested Service *</label>
                      <div className="relative">
                        <select 
                          id="service" 
                          defaultValue="" 
                          className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all appearance-none cursor-pointer text-sm pr-10 text-text-dark font-medium" 
                          required
                        >
                           <option value="" disabled className="text-text-dark/40">Select the service you need...</option>
                           <option value="Modular Kitchens">Modular Kitchens</option>
                           <option value="Custom Wardrobes & Storage">Custom Wardrobes & Storage</option>
                           <option value="Residential Interior Design">Residential Interior Design</option>
                           <option value="Complete Turnkey Interiors">Complete Turnkey Interiors</option>
                           <option value="3D Design & Space Planning">3D Design & Space Planning</option>
                           <option value="Furniture Customization">Furniture Customization</option>
                           <option value="Decorative Wall Paneling">Decorative Wall Paneling</option>
                           <option value="Smart Home Automation">Smart Home Automation</option>
                           <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dark/40 pointer-events-none" />
                      </div>
                   </div>

                   <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50" htmlFor="message">Your Message *</label>
                      <textarea 
                        required 
                        id="message" 
                        rows={4} 
                        placeholder="Describe your project, property details, design preferences, or any specific questions..." 
                        className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all resize-none text-sm leading-relaxed"
                      ></textarea>
                   </div>

                   <button 
                     disabled={formState === 'submitting'}
                     className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2 group cursor-pointer mt-2"
                   >
                     {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                     <Send size={18} className={cn("transition-transform", formState !== 'submitting' && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                   </button>
                </form>
              )}
           </div>

           {/* Info Column */}
           <div className="lg:py-10 space-y-12">
              <div>
                 <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                 <div className="space-y-6">
                    <a href="tel:+919010106877" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Call Us</div>
                          <div className="text-xl font-bold">+91 9010106877</div>
                       </div>
                    </a>
                    <a href="mailto:Squareconcepts6877@gmail.com" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                          <Mail size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</div>
                          <div className="text-lg sm:text-xl font-bold break-all">Squareconcepts6877@gmail.com</div>
                       </div>
                    </a>
                    <div className="flex items-start gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Studio</div>
                          <div className="text-[15px] sm:text-lg font-bold leading-relaxed">
                            H. No. 6-2-296/82/A/62, Plot No. 6,<br/>
                            Jubilee Hills, Hyderabad – 500033,<br/>
                            Telangana, India
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div>
                 <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                 <div className="flex gap-4">
                    {[
                      { icon: <Instagram size={24} />, name: 'Instagram' },
                      { icon: <Facebook size={24} />, name: 'Facebook' },
                      { icon: <Twitter size={24} />, name: 'Twitter' },
                    ].map((social) => (
                      <a key={social.name} href="#" className="w-14 h-14 rounded-full bg-white smooth-shadow flex items-center justify-center text-text-dark/40 hover:text-accent hover:bg-accent/5 transition-all">
                         {social.icon}
                      </a>
                    ))}
                 </div>
              </div>

              <div className="bg-secondary-bg p-8 rounded-3xl text-white">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                       <MessageSquare size={20} />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight">Need help faster?</h4>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed mb-6">
                   Chat with our design consultant on WhatsApp for quick estimates and material advice.
                 </p>
                 <a href="#" className="inline-flex items-center gap-2 bg-white text-secondary-bg px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-all">
                    WhatsApp Chat
                 </a>
              </div>
           </div>
        </div>
      </Section>

      {/* Realtime Google Maps Section */}
      <section className="w-full h-[450px] md:h-[520px] relative border-t border-text-dark/10 bg-primary-bg overflow-hidden">
        <iframe
          title="Square Concepts Studio Location - Jubilee Hills, Hyderabad"
          src="https://maps.google.com/maps?q=H.+No.+6-2-296%2F82%2FA%2F62%2C+Plot+No.+6%2C+Jubilee+Hills%2C+Hyderabad+%E2%80%93+500033%2C+Telangana%2C+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Studio Info Overlay Card */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-text-dark/10 max-w-sm pointer-events-auto">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-accent/20">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-0.5">Studio Location</div>
              <h4 className="font-bold text-text-dark text-sm sm:text-base leading-snug">
                Jubilee Hills, Hyderabad
              </h4>
              <p className="text-xs text-text-dark/70 mt-1 leading-relaxed">
                H. No. 6-2-296/82/A/62, Plot No. 6, Jubilee Hills, Hyderabad – 500033, Telangana, India
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=H.+No.+6-2-296%2F82%2FA%2F62%2C+Plot+No.+6%2C+Jubilee+Hills%2C+Hyderabad+%E2%80%93+500033%2C+Telangana%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-hover text-xs font-bold transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
