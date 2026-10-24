import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { CheckCircle2, Star, Calendar, Shield, IndianRupee, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import SEO from '@/src/components/SEO';

const benefits = [
  { icon: <Calendar size={24} />, title: 'Free Expert Advice', description: 'Get a 1-on-1 session with our senior designers.' },
  { icon: <Star size={24} />, title: '3D Preview Visualization', description: 'See your future space before you commit.' },
  { icon: <IndianRupee size={24} />, title: 'Detailed Cost Estimate', description: 'Transparent pricing with no hidden surprises.' },
  { icon: <Shield size={24} />, title: 'Quality Guarantee', description: 'Only the finest materials and craftsmanship.' },
];

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    propertyType: '',
    budget: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getWhatsAppMessage = () => {
    return `*New Consultation Request - Square Concepts*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
🛠️ *Service:* ${formData.service || 'General Consultation'}
🏠 *Property:* ${formData.propertyType || 'Not specified'}
💰 *Budget:* ${formData.budget || 'Not specified'}
${formData.location ? `📍 *Location:* ${formData.location}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Hi Square Concepts, I have submitted a consultation request and would like to schedule a session.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = getWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919010106877?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Book Free Interior Design Consultation in Hyderabad | Square Concepts"
        description="Schedule your complimentary 1-on-1 interior design consultation with Square Concepts in Jubilee Hills, Hyderabad. Get personalized layouts, 3D previews, and transparent pricing in INR."
        path="/consultation"
        keywords="free interior consultation Hyderabad, interior design quotation Hyderabad, hire interior designers Jubilee Hills, modular kitchen consultation Hyderabad"
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600"
          alt="Consultation Hero"
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
            Get Started
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Book Your <span className="text-accent">Free</span> Consultation
          </motion.h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            Take the first step towards your dream home. Fill out the form below and our experts will reach out to schedule a meeting.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      <Section className="bg-primary-bg pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
           {/* Form Column */}
           <div className="flex flex-col">
              <div className="bg-white p-8 sm:p-10 rounded-[32px] smooth-shadow border border-text-dark/5 flex-grow">
                 {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full flex flex-col items-center justify-center text-center py-16"
                   >
                     <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-6 shadow-2xl shadow-[#25D366]/30">
                        <CheckCircle2 size={40} />
                     </div>
                     <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 tracking-tight">Consultation Requested!</h2>
                     <p className="text-text-dark/65 text-base mb-6 max-w-sm leading-relaxed">
                       Your inquiry has been prepared for WhatsApp! If the chat didn't open automatically, click the button below to message our design team directly.
                     </p>
                     <a
                       href={`https://wa.me/919010106877?text=${encodeURIComponent(getWhatsAppMessage())}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-full font-bold text-base flex items-center gap-3 shadow-xl shadow-[#25D366]/25 transition-all mb-4 hover:scale-105 active:scale-95"
                     >
                       <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.06 21.87h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.38a9.9 9.9 0 01-1.52-5.25c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.13 1.03 7 2.91 1.88 1.87 2.91 4.36 2.91 7.01 0 5.46-4.45 9.89-9.92 9.89zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                       </svg>
                       <span>Chat with Design Team on WhatsApp</span>
                     </a>
                     <button
                       type="button"
                       onClick={() => setSubmitted(false)}
                       className="text-xs text-text-dark/40 hover:text-accent font-semibold underline mt-2"
                     >
                       Submit another response
                     </button>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-text-dark mb-1">Schedule Your Session</h3>
                        <p className="text-text-dark/60 text-sm">Fill in your requirements below for a dedicated 1-on-1 consultation.</p>
                      </div>

                      {/* 1. Client Identity */}
                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Full Name *</label>
                         <input 
                           required 
                           type="text" 
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           placeholder="e.g. Rajesh Sharma" 
                           className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent text-sm" 
                         />
                      </div>

                      {/* 2. Contact Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Phone Number *</label>
                            <input 
                              required 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210" 
                              className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent text-sm" 
                            />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Email Address *</label>
                            <input 
                              required 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="rajesh@example.com" 
                              className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent text-sm" 
                            />
                         </div>
                      </div>

                      {/* 3. Service Required (Dropdown) */}
                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Service Required *</label>
                         <div className="relative">
                           <select 
                             required 
                             name="service"
                             value={formData.service}
                             onChange={handleChange}
                             className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none cursor-pointer text-sm pr-10 text-text-dark font-medium"
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

                      {/* 4. Property Type & Budget Range (Both in Dropdown Format) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Property Type *</label>
                            <div className="relative">
                              <select 
                                required 
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none cursor-pointer text-sm pr-10 text-text-dark font-medium"
                              >
                                 <option value="" disabled className="text-text-dark/40">Select property type...</option>
                                 <option value="2 BHK Apartment">2 BHK Apartment</option>
                                 <option value="3 BHK Apartment">3 BHK Apartment</option>
                                 <option value="4 BHK / Penthouse">4 BHK / Penthouse</option>
                                 <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                                 <option value="Commercial / Office">Commercial / Office</option>
                                 <option value="Independent Floor / Row House">Independent Floor / Row House</option>
                              </select>
                              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dark/40 pointer-events-none" />
                            </div>
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Budget Range (INR) *</label>
                            <div className="relative">
                              <select 
                                required 
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none cursor-pointer text-sm pr-10 text-text-dark font-medium"
                              >
                                 <option value="" disabled className="text-text-dark/40">Select budget range...</option>
                                 <option value="₹3 Lakh – ₹5 Lakh">₹3 Lakh – ₹5 Lakh</option>
                                 <option value="₹5 Lakh – ₹10 Lakh">₹5 Lakh – ₹10 Lakh</option>
                                 <option value="₹10 Lakh – ₹25 Lakh">₹10 Lakh – ₹25 Lakh</option>
                                 <option value="₹25 Lakh – ₹50 Lakh">₹25 Lakh – ₹50 Lakh</option>
                                 <option value="₹50 Lakh & above">₹50 Lakh & above</option>
                              </select>
                              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dark/40 pointer-events-none" />
                            </div>
                         </div>
                      </div>

                      {/* 5. Project Location / City */}
                      <div className="space-y-1.5">
                         <label className="text-xs font-bold uppercase tracking-widest text-text-dark/50">Project Location / City (Optional)</label>
                         <input 
                           type="text" 
                           name="location"
                           value={formData.location}
                           onChange={handleChange}
                           placeholder="e.g. Hyderabad, Banjara Hills / Bangalore, Whitefield" 
                           className="w-full px-5 py-3.5 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent text-sm" 
                         />
                      </div>

                      {/* Submit CTA */}
                      <button 
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-[#25D366]/20 cursor-pointer flex items-center justify-center gap-2 group mt-3 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.06 21.87h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.38a9.9 9.9 0 01-1.52-5.25c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.13 1.03 7 2.91 1.88 1.87 2.91 4.36 2.91 7.01 0 5.46-4.45 9.89-9.92 9.89zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                        </svg>
                        Book Free Consultation on WhatsApp
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
                      </button>

                      <p className="text-[11px] text-center text-text-dark/40 flex items-center justify-center gap-1.5 pt-1">
                        <ShieldCheck size={14} className="text-accent" />
                        100% confidential. Connect directly with our team on WhatsApp.
                      </p>
                   </form>
                 )}
              </div>
           </div>

           {/* Info Column */}
           <div className="flex flex-col gap-12">
              <div className="space-y-8">
                 <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">Why Choose a Free Consultation?</h2>
                 <p className="text-text-dark/60 text-lg leading-relaxed">
                   Our consultation is more than just a sales call. It's an opportunity to discover the hidden potential of your space with professionals.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4">
                         <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                            {benefit.icon}
                         </div>
                         <div>
                            <h4 className="font-bold mb-1">{benefit.title}</h4>
                            <p className="text-text-dark/50 text-xs leading-relaxed">{benefit.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-auto p-10 bg-secondary-bg rounded-[32px] text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Star size={120} weight="fill" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                       {[1, 2, 3, 4, 5].map((s) => (Star && <Star key={s} fill="#E57A2E" size={16} className="text-accent" />))}
                    </div>
                    <p className="text-xl font-medium italic mb-8 leading-relaxed">
                      "The initial consultation was eye-opening. They caught structural opportunities we hadn't even considered. Highly worth the time."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">M</div>
                       <div>
                          <div className="font-bold">Michael Ross</div>
                          <div className="text-xs text-white/40">Villa Owner, New Jersey</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
}
