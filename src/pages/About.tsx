import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { Target, Lightbulb, Shield, Timer, Award, Smile } from 'lucide-react';
import { FadeIn, FadeInRight, ScaleIn, defaultVariants } from '@/src/components/Motion';
import SEO from '@/src/components/SEO';

const advantages = [
  { icon: <Shield />, title: 'End-to-End Service', description: 'From concept to execution, we handle everything.' },
  { icon: <Timer />, title: 'On-Time Delivery', description: 'Strict adherence to timelines with clear progress reporting.' },
  { icon: <Award />, title: 'Premium Materials', description: 'We only use top-grade materials for lasting luxury.' },
  { icon: <Target />, title: 'Personalized Approach', description: 'Designs tailored to your unique quirks and lifestyle.' },
  { icon: <Lightbulb />, title: 'Creative Solutions', description: 'Innovation at the core of space optimization.' },
  { icon: <Smile />, title: 'Post-Delivery Support', description: 'We stand by our work long after handover.' },
];

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Us | Square Concepts Luxury Interior Designers Hyderabad"
        description="Discover the story behind Square Concepts, Hyderabad's premier interior architecture and design firm in Jubilee Hills. Master craftsmanship, precision engineering, and bespoke living spaces."
        path="/about"
        keywords="About Square Concepts, interior designers Hyderabad, interior architecture Hyderabad, luxury living Jubilee Hills, interior design firm Hyderabad"
      />
      {/* About Hero */}
      <section className="relative pt-20 pb-12 md:pb-16 px-6 sm:px-8 lg:px-12 text-center overflow-hidden min-h-[60vh] flex items-center justify-center">
         {/* Background Image & Overlay */}
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary-bg/40" />
         </div>

         <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-4 border-accent rounded-full -rotate-12" />
         </div>
         <motion.div 
           initial="hidden"
           animate="visible"
           variants={{
             visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="max-w-4xl mx-auto relative z-10"
         >
            <FadeIn>
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6">
                Architectural Curator
              </h4>
            </FadeIn>
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                Elegant Spaces <br />
                <span className="text-accent">Engineered to Perfection</span>
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
                At Square Concepts, we don't just design spaces; we curate habitats that breathe. Our philosophy merges the rigorous precision of engineering with the tactile poetry of high-end interior craft.
              </p>
            </FadeIn>
         </motion.div>
      </section>

      {/* Story Section */}
      <Section className="bg-primary-bg pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Our Journey of Excellence</h2>
              </FadeIn>
              <FadeIn className="text-xl text-text-dark/60 leading-relaxed">
                Founded over a decade ago, Square Concepts began with a simple mission: to make premium interior design accessible and practical without losing the soul of artistic expression.
              </FadeIn>
              <FadeIn className="text-lg text-text-dark/50 leading-relaxed">
                We've evolved from a small design studio to a full-scale interior execution firm, delivering over 500+ dream homes across the country. Our focus has always remained on quality, transparency, and client satisfaction.
              </FadeIn>
              <FadeIn className="grid grid-cols-2 gap-8 pt-8">
                 <div>
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Years of History</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Stories Delivered</div>
                 </div>
              </FadeIn>
           </div>
           <ScaleIn className="relative flex justify-center lg:justify-end">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" alt="Excellence" className="rounded-3xl smooth-shadow w-full max-w-lg aspect-square object-cover" />
           </ScaleIn>
        </div>
      </Section>

      {/* Our Approach */}
      <Section dark className="bg-secondary-bg pt-8 md:pt-12 pb-12 md:pb-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">How We Work</h4>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white leading-tight">Our Strategic Approach</h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           { [
             { icon: <Target size={32} />, title: 'Personalized Design', desc: 'We don\'t do "copy-paste." Every home is a fresh canvas tailored specifically to your personality.' },
             { icon: <Shield size={32} />, title: 'Quality Execution', desc: 'Our in-house production units ensure that what was designed is exactly what is delivered.' },
             { icon: <Lightbulb size={32} />, title: 'Total Transparency', desc: 'Clear pricing, material specifications, and project tracking to keep you in the loop.' },
           ].map((item, i) => (
             <motion.div key={i} variants={defaultVariants} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-8">
                   {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-light/60 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Our Philosophy */}
      <Section className="bg-primary-bg pt-10 md:pt-16 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
           <ScaleIn className="relative order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Studio" 
                className="rounded-3xl smooth-shadow w-full max-w-[380px] md:max-w-[420px] aspect-[4/3] object-cover" 
              />
           </ScaleIn>
           <div className="space-y-6 order-1 lg:order-2 lg:col-span-7">
              <FadeIn>
                <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Our Core Philosophy</h4>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">Crafting Legacies Through Design</h2>
              </FadeIn>
              <FadeIn className="text-lg md:text-xl text-text-dark/70 leading-relaxed max-w-2xl">
                At Square Concepts, we believe that a well-designed space is the foundation of a life well-lived. Our approach is rooted in the belief that every environment has a story to tell.
              </FadeIn>
              <FadeIn className="text-base md:text-lg text-text-dark/60 leading-relaxed max-w-2xl">
                We combine the latest in architectural technology with timeless aesthetic principles to create spaces that are not only beautiful but also deeply functional and enduring. Our team of experts works tirelessly to ensure that every project reflects the unique personality and aspirations of our clients, delivering excellence in every detail.
              </FadeIn>
           </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white border-y border-text-dark/5 pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
           <FadeInRight className="lg:col-span-4">
              <h4 className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Advantages</h4>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 leading-tight">Why Square Concepts?</h2>
              <p className="text-text-dark/60 text-base leading-relaxed">
                Designing beautiful, functional spaces tailored to your lifestyle—crafted with premium quality, complete transparency, and lasting care.
              </p>
           </FadeInRight>
           <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6 pt-1">
              {advantages.map((adv) => (
                <motion.div key={adv.title} variants={defaultVariants} className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 [&>svg]:w-5 [&>svg]:h-5">
                      {adv.icon}
                   </div>
                   <div>
                      <h4 className="text-base md:text-lg font-bold mb-1 leading-snug">{adv.title}</h4>
                      <p className="text-text-dark/50 leading-relaxed text-sm">
                        {adv.description}
                      </p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </Section>
    </div>
  );
}
