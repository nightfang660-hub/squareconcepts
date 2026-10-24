import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Layout, Award, Settings } from 'lucide-react';
import { primaryServices } from './Services';
import { cn } from '@/src/lib/utils';
import SEO from '@/src/components/SEO';

const serviceData: Record<string, any> = {
  'modular-kitchens': {
    title: 'Modular Kitchens',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    description: 'Transform your culinary space with our state-of-the-art modular kitchen solutions. We combine ergonomic principles with luxury finishes to create kitchens that are as efficient as they are beautiful.',
    featuresDescription: 'Engineered for effortless daily culinary workflows, blending precision German motion hardware, moisture-resistant carcases, and intelligent corner storage for long-lasting performance.',
    process: [
      { title: 'Space Analysis', desc: 'Understanding your workflow and storage needs.' },
      { title: 'Layout Design', desc: 'Selection from L-shape, U-shape, Parallel, or Island layouts.' },
      { title: 'Material Selection', desc: 'Choosing from premium laminates, acrylic, or PU finishes.' },
      { title: 'Installation', desc: 'Precision fitting by our expert craftsmen.' },
    ],
    features: [
      'Precision German hardware',
      'Soft-close telescopic channels',
      'Corrosion resistant materials',
      'Built-in appliance integration',
      'Smart corner storage units',
      'Heat & moisture resistant finishes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Maximized Space', desc: 'Every inch utilized with smart accessories.' },
      { icon: <Settings />, label: 'Easy Maintenance', desc: 'Waterproof materials for easy cleaning.' },
      { icon: <Award />, label: 'Lifetime Warranty', desc: 'Quality hardware backed by our commitment.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'custom-wardrobes': {
    title: 'Custom Wardrobes',
    heroImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600',
    description: 'Our bespoke wardrobe solutions are designed to fit your unique style and storage requirements perfectly. From walk-in closets to sliding wardrobes, we create space for everything you love.',
    process: [
      { title: 'Storage Audit', desc: 'Analyzing your clothing and accessory collection.' },
      { title: 'Mechanism Choice', desc: 'Selection of hinged, sliding, or walk-in solutions.' },
      { title: 'Internal Layout', desc: 'Defining drawers, shelves, and hanging spaces.' },
      { title: 'Final Finishing', desc: 'Exterior finish that complements your bedroom.' },
    ],
    features: [
      'Floor-to-ceiling storage',
      'Integrated sensor lighting',
      'Anti-jump sliding mechanisms',
      'Soft-close hinges & sliders',
      'Custom internal accessories',
      'Premium veneer or laminate finishes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Organized Living', desc: 'Specific spaces for every accessory.' },
      { icon: <Settings />, label: 'Durable Build', desc: 'Reinforced structures for longevity.' },
      { icon: <Award />, label: 'Premium Aesthetics', desc: 'A statement piece for your bedroom.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'turnkey-interiors': {
    title: 'Turnkey Interiors',
    heroImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1600',
    description: 'Experience a hassle-free home transformation. Our turnkey service covers everything from civil work and electricals to furniture and decor. You give us the keys, we give you the home of your dreams.',
    process: [
      { title: 'Conceptualization', desc: 'Defining the overall design language and mood.' },
      { title: 'Site Preparation', desc: 'Civil modifications, plumbing, and electrical work.' },
      { title: 'Execution', desc: 'Manufacturing and site-fitting of all elements.' },
      { title: 'Styling', desc: 'Final decor, lighting, and placement of furniture.' },
    ],
    features: [
      'Complete project management',
      'Civil & structural work',
      'Electrical & lighting setup',
      'Custom furniture & decor',
      'On-site quality supervision',
      'Transparent material tracking'
    ],
    benefits: [
      { icon: <Layout />, label: 'One Point of Contact', desc: 'No need to coordinate with multiple vendors.' },
      { icon: <Settings />, label: 'Timely Delivery', desc: 'Strict project timelines with phase tracking.' },
      { icon: <Award />, label: 'Peace of Mind', desc: 'Warranty on every single component.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'residential-interiors': {
    title: 'Residential Interiors',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    description: 'We believe your home should tell your story. Our residential interior services focus on creating personalized, lived-in spaces that balance aesthetics with the daily routines of your family.',
    process: [
      { title: 'Consultation', desc: 'Mood boarding and style preference identification.' },
      { title: '3D Visualization', desc: 'Photorealistic views of your future space.' },
      { title: 'Procurement', desc: 'Sourcing the finest materials and furniture.' },
      { title: 'Realization', desc: 'Careful execution of designs on your site.' },
    ],
    features: [
      'Bespoke room designs',
      'Ergonomic space planning',
      'Aesthetic color curation',
      'Premium textural elements',
      'Curated art & accessories',
      'Balanced lighting schemes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Functional Beauty', desc: 'Designs that work for real people.' },
      { icon: <Settings />, label: 'Adaptive Design', desc: 'Spaces that evolve with your family.' },
      { icon: <Award />, label: 'Artisan Quality', desc: 'Handcrafted details in every corner.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  '3d-design': {
    title: '3D Design & Visualization',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    description: 'Experience your future space with photorealistic clarity before physical work begins. We craft immersive 3D renders, VR walk-throughs, and lighting simulations so you make confident design decisions.',
    featuresDescription: 'State-of-the-art 3D modeling and lighting simulation ensure every texture, shadow, and architectural detail is visualized with photorealistic fidelity before execution.',
    process: [
      { title: 'Floorplan Digitization', desc: 'Transforming architectural drawings into exact 3D models.' },
      { title: 'Material & Texture Mapping', desc: 'Applying true-to-life finishes, fabrics, and woods.' },
      { title: 'Lighting & Mood Simulation', desc: 'Testing natural sun angles and ambient evening illumination.' },
      { title: 'Photorealistic Rendering', desc: 'High-resolution panoramic renders and VR walkthroughs.' },
    ],
    features: [
      'Photorealistic 4K render outputs',
      'Virtual reality (VR) walkthroughs',
      'Accurate scale and dimension mapping',
      'Material texture matching to real samples',
      'Day and night lighting simulations',
      'Rapid design iteration & revision support'
    ],
    benefits: [
      { icon: <Layout />, label: 'Zero Surprises', desc: 'See exactly what will be built before spending on materials.' },
      { icon: <Settings />, label: 'Fast Decision Making', desc: 'Compare color palettes and finishes instantly.' },
      { icon: <Award />, label: 'Precision Execution', desc: 'Clear visual blueprints that eliminate contractor misinterpretation.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'renovation-remodeling': {
    title: 'Renovation & Remodeling',
    heroImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600',
    description: 'Breathe new life into your existing space. Whether it is an old apartment or a dated villa, our renovation specialists ensure structural integrity while delivering a complete aesthetic overhaul.',
    process: [
      { title: 'Structural Audit', desc: 'Verification of existing walls, pipes, and beams.' },
      { title: 'Design Revamp', desc: 'Modernizing the space with contemporary designs.' },
      { title: 'Demolition & Rebuild', desc: 'Controlled civil work and fresh construction.' },
      { title: 'Finishing', desc: 'Complete renewal of surfaces, floors, and ceilings.' },
    ],
    features: [
      'Structural safety checks',
      'Dampness & leakage repair',
      'Complete floor replacement',
      'Modern electrical rewiring',
      'Wall removal for open layouts',
      'High-performance plumbing'
    ],
    benefits: [
      { icon: <Layout />, label: 'Value Appreciation', desc: 'Significantly increase your property value.' },
      { icon: <Settings />, label: 'Modern Infrastructure', desc: 'Replace old tech with energy efficient ones.' },
      { icon: <Award />, label: 'Fresh Identity', desc: 'Transforming memories into modern living.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'furniture': {
    title: 'Furniture Customization',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600',
    description: 'Artisanal, handcrafted bespoke furniture tailored to your exact comfort, dimensions, and architectural aesthetics. Each piece is constructed using sustainably sourced hardwoods and high-grade fabrics.',
    process: [
      { title: 'Ergonomic Sizing', desc: 'Taking exact room dimensions and posture preferences.' },
      { title: 'Timber & Textile', desc: 'Selecting teak, walnut, Italian leather, or bouclé fabrics.' },
      { title: 'Artisan Crafting', desc: 'Joinery and hand-carving by experienced woodworkers.' },
      { title: 'Final Finishing', desc: 'Protective coatings, polish, and white-glove installation.' },
    ],
    features: [
      'Kiln-dried hardwood frames',
      'High-density memory foam',
      'Stain-resistant performance fabrics',
      'Custom stain & lacquer finishes',
      'Seamless joinery craftsmanship',
      '10-year structural warranty'
    ],
    benefits: [
      { icon: <Layout />, label: 'Tailored Fit', desc: 'Proportions built precisely for your home.' },
      { icon: <Settings />, label: 'Heirloom Quality', desc: 'Built to last through generations.' },
      { icon: <Award />, label: 'Exclusive Identity', desc: 'Unique furniture pieces found nowhere else.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'wall-paneling': {
    title: 'Decorative Wall Paneling',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
    description: 'Elevate your interiors with architectural wall treatments. From geometric acoustic slats to rich wood fluting and stone veneers, we add dimension and luxury to every wall.',
    process: [
      { title: 'Surface Assessment', desc: 'Measuring wall flatness, moisture, and electrical conduits.' },
      { title: 'Pattern Design', desc: 'Choosing fluted, acoustic slatted, or geometric panels.' },
      { title: 'Precision Fabrication', desc: 'CNC cut panels with micro-beveled alignment.' },
      { title: 'Seamless Mounting', desc: 'Concealed fixing systems with integrated LED profile channels.' },
    ],
    features: [
      'Acoustic sound absorption',
      'Concealed lighting integration',
      'Scratch & impact resistant',
      'Fire-retardant core boards',
      'Precision CNC milled profiles',
      'Zero-emission eco finishes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Visual Depth', desc: 'Adds warmth and architectural luxury.' },
      { icon: <Settings />, label: 'Acoustic Comfort', desc: 'Dampens echoes for serene acoustic quality.' },
      { icon: <Award />, label: 'Concealed Tech', desc: 'Hides cables and ambient LED drivers seamlessly.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'smart-home': {
    title: 'Smart Home Integration',
    heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1600',
    description: 'Seamless smart living designed around you. Automate mood lighting, climate control, motorized curtains, and intelligent security with intuitive voice and touch interfaces.',
    process: [
      { title: 'Lifestyle Audit', desc: 'Mapping your daily routines and automation needs.' },
      { title: 'System Architecture', desc: 'Designing protocols (Matter, Zigbee, KNX) and wiring.' },
      { title: 'Hardware Integration', desc: 'Installing hidden modules, sensors, and tactile switches.' },
      { title: 'Scene Programming', desc: 'Creating custom scenes: Cinema, Morning, Party, and Away.' },
    ],
    features: [
      'Unified mobile & voice control',
      'Automated circadian lighting',
      'Smart biometric access & security',
      'Motorized drapery & blind controls',
      'Energy usage monitoring',
      'Offline local processing backup'
    ],
    benefits: [
      { icon: <Layout />, label: 'Effortless Living', desc: 'One touch transforms your whole environment.' },
      { icon: <Settings />, label: 'Energy Efficiency', desc: 'Saves up to 30% on climate and power bills.' },
      { icon: <Award />, label: 'Future Ready', desc: 'Expandable modular platform for emerging tech.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id || ''] || serviceData['modular-kitchens'];
  const validId = id && serviceData[id] ? id : 'modular-kitchens';

  const seoTitle = `${service.title} in Hyderabad | Square Concepts`;
  const seoDescription = `${service.description} Handcrafted by Square Concepts interior specialists in Jubilee Hills, Hyderabad.`;

  return (
    <div className="pt-20">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        path={`/services/${validId}`}
        image={service.heroImage}
        keywords={`${service.title}, ${service.title} Hyderabad, Square Concepts Hyderabad, luxury interiors Jubilee Hills`}
      />
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[48vh] min-h-[360px] w-full overflow-hidden">
        <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 pb-14 pt-4 sm:pb-8 md:py-12 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pb-2 sm:pb-0">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs mb-3 text-accent hover:text-white transition-colors"
              >
                <ArrowLeft size={16} /> Back to Services
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-3 leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Grid - Core Features & Contact Quote Side by Side */}
      <Section noPadding className="bg-primary-bg pt-8 md:pt-12 pb-10 md:pb-16" containerClassName="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column - Core Features */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-9 rounded-3xl smooth-shadow border border-text-dark/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-2.5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Key Highlights
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-2.5 italic text-text-dark">
                Core Features
              </h2>
              <p className="text-text-dark/65 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                {service.featuresDescription || 'Engineered with precision materials and tailored ergonomic craftsmanship to guarantee lasting durability and effortless comfort in your everyday space.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {service.features.map((feature: string) => (
                  <div key={feature} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0 mt-0.5">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-text-dark/80 group-hover:text-text-dark transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Contact & Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-secondary-bg text-white p-6 sm:p-8 rounded-3xl shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-2">Request a Quote</h3>
                <p className="text-white/60 mb-5 text-xs sm:text-sm leading-relaxed italic line-clamp-2">
                  Interested in {service.title}? Speak to our specialized consultant for a customized estimate.
                </p>
                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit: any) => (
                    <div key={benefit.label} className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm tracking-tight">{benefit.label}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">{benefit.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/consultation"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-full font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                Quick Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* The Journey Section - Full Width Extended 4-Column Layout */}
      <Section className="bg-primary-bg pt-4 md:pt-6 pb-12 md:pb-16" containerClassName="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-accent font-bold uppercase tracking-widest text-xs mb-2">
            Execution Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold italic text-text-dark mb-3">
            The Journey
          </h2>
          <p className="text-text-dark/60 max-w-xl text-sm md:text-base leading-relaxed">
            Our structured step-by-step approach ensuring perfection from initial vision to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step: any, idx: number) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-7 bg-white rounded-3xl border border-text-dark/5 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-2xl bg-accent/10 text-accent font-display font-bold text-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    0{idx + 1}
                  </span>
                  <span className="text-4xl font-display font-black text-text-dark/5 group-hover:text-accent/10 transition-colors select-none">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2.5 text-text-dark group-hover:text-accent transition-colors">
                  {step.title}
                </h4>
                <p className="text-text-dark/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress step bar indicator */}
              <div className="mt-6 pt-4 border-t border-text-dark/5 flex items-center justify-between text-xs text-text-dark/40">
                <span className="font-semibold uppercase tracking-wider text-[10px]">Phase 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:scale-125 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section noPadding className="bg-primary-bg pt-12 pb-16 md:pb-20">
        <div className="w-full">
          {service.galleryImages.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[350px]">
              {service.galleryImages.map((img: string, i: number) => (
                <div key={i} className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[320px]">
              <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                <img src={service.galleryImages[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 1" />
              </div>
              <div className="grid grid-rows-2 gap-8 h-full">
                <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={service.galleryImages[1]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 2" />
                </div>
                <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={service.galleryImages[2]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 3" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Other Services */}
      <Section className="bg-white border-y border-text-dark/5 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold italic">Other Services</h2>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-bold text-sm tracking-wider uppercase group transition-all"
          >
            View All <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryServices.filter(s => s.id !== id).slice(0, 3).map(s => (
            <Link 
              key={s.id} 
              to={`/services/${s.id}`} 
              className="group p-8 bg-primary-bg rounded-3xl border border-text-dark/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-text-dark group-hover:text-accent transition-colors">{s.title}</h4>
                <p className="text-text-dark/60 text-sm line-clamp-2 leading-relaxed">{s.shortDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-text-dark/5 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                Explore Service <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
