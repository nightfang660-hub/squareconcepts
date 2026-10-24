import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Maximize2, CheckCircle2 } from 'lucide-react';
import { projects } from '@/src/data/projects';
import SEO from '@/src/components/SEO';

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.id === Number(id));
  const project = projects[projectIndex >= 0 ? projectIndex : 0];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const validId = project.id;

  const seoTitle = `${project.title} | Luxury Interior by Square Concepts Hyderabad`;
  const seoDescription = `${project.description} Designed and executed by Square Concepts in ${project.location}, Hyderabad.`;

  return (
    <div className="pt-20">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        path={`/projects/${validId}`}
        image={project.image}
        keywords={`${project.title}, ${project.location} interior design, Square Concepts Hyderabad, luxury interior designers`}
      />
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/90 via-secondary-bg/55 to-secondary-bg/35" />
        <div className="absolute top-0 left-0 right-0 pt-8 md:pt-12 pb-16 px-6 md:px-10 lg:px-12 z-10">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-left"
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-4 hover:gap-3 transition-all">
                <ArrowLeft size={16} /> Back to Projects
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4 leading-tight">
                {project.title.split('—')[0]?.trim()} {project.title.includes('—') && <>— <span className="text-accent">{project.title.split('—').slice(1).join('—').trim()}</span></>}
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-6 font-sans">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-6 text-white/85 font-medium text-sm md:text-base">
                <div className="flex items-center gap-2"><MapPin size={16} className="text-accent"/> {project.location}</div>
                <div className="flex items-center gap-2"><Calendar size={16} className="text-accent"/> Completed in {project.year}</div>
                <div className="flex items-center gap-2"><Maximize2 size={16} className="text-accent"/> {project.area}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section className="bg-white py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Overview & Execution</h2>
              <p className="text-xl text-text-dark/70 leading-relaxed">
                {project.description} We utilized a curated palette of natural materials and premium finishes to create enduring warmth and elegance. The spatial layout was meticulously planned to ensure optimum flow, ergonomics, and seamless functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4 p-6 bg-primary-bg rounded-2xl border border-text-dark/5">
                <h3 className="text-xl font-bold text-text-dark">Design Requirements</h3>
                <p className="text-text-dark/60 leading-relaxed text-sm">
                  The client sought a refined balance between contemporary luxury and low-maintenance functionality, tailored to the lifestyle and spatial parameters of this {project.location} residence.
                </p>
              </div>
              <div className="space-y-4 p-6 bg-primary-bg rounded-2xl border border-text-dark/5">
                <h3 className="text-xl font-bold text-text-dark">Execution Highlights</h3>
                <p className="text-text-dark/60 leading-relaxed text-sm">
                  Precision modular joinery, integrated ambient lighting layers, concealed storage accents, and high-durability surfaces executed by Square Concepts' in-house craftsmen.
                </p>
              </div>
            </div>

            {project.gallery[0] && (
              <div className="rounded-3xl overflow-hidden smooth-shadow aspect-video mt-12">
                <img src={project.gallery[0]} alt="Project Detail" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[32px] border border-text-dark/10 smooth-shadow sticky top-32">
              <h3 className="text-2xl font-bold mb-8 italic">Project Summary</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Client</div>
                  <div className="font-bold text-lg text-text-dark">{project.clientName}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Project Type</div>
                  <div className="font-bold text-accent">{project.projectType}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Location</div>
                  <div className="font-bold text-text-dark">{project.location}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Status</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <CheckCircle2 size={12} /> {project.status}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Materials & Finishes</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Natural Oak', 'Italian Marble', 'PU Matt Finish', 'Acoustic Wall Panels'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary-bg rounded-lg text-xs font-medium text-text-dark/70">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-text-dark/5">
                <p className="text-sm text-text-dark/50 italic mb-6">
                  "Square Concepts brought an exceptional level of precision and luxury to our space. On-time delivery and flawless craftsmanship."
                </p>
                <div className="font-bold text-sm text-text-dark">– {project.clientName}, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Grid */}
      {project.gallery.length > 1 && (
        <Section className="bg-primary-bg py-12 md:py-16">
          <div className="w-full">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.slice(1, 4).map((img, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden aspect-square smooth-shadow">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`${project.title} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Next Project */}
      <Section dark className="relative bg-secondary-bg py-24 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src={nextProject.image} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
            alt={nextProject.title} 
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Next Completed Project</span>
          <Link to={`/projects/${nextProject.id}`} className="group text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight hover:text-accent transition-all duration-500 transform group-hover:scale-105">
              {nextProject.title}
            </h2>
            <div className="inline-flex items-center gap-3 text-white/60 font-bold uppercase tracking-[0.2em] text-xs group-hover:text-accent group-hover:gap-6 transition-all">
              View Case Study <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
