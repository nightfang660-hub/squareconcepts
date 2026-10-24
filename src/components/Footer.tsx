import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, PhoneCall } from 'lucide-react';
import logoImage from '../logo.image.png';

const links = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Modular Kitchens', path: '/services/modular-kitchens' },
    { name: 'Custom Wardrobes', path: '/services/custom-wardrobes' },
    { name: 'Residential Interior Design', path: '/services/residential-interiors' },
    { name: '3D Design & Visualization', path: '/services/3d-design' },
    { name: 'Furniture Customization', path: '/services/furniture' },
    { name: 'Decorative Wall Paneling', path: '/services/wall-paneling' },
    { name: 'Smart Home Integration', path: '/services/smart-home' },
  ],
};

export default function Footer() {
  return (
    <>

      <footer className="bg-secondary-bg text-text-light pt-10 pb-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center">
             <img src={logoImage} alt="Square Concepts Logo" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-text-light/60 max-w-xs leading-relaxed text-sm">
            Crafting bespoke interiors that blend elegance with functionality. Your vision, our expertise, timeless results.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2">
            {links.navigation.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-text-light/60 hover:text-accent transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-accent">Our Services</h4>
          <ul className="space-y-2">
            {links.services.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-text-light/60 hover:text-accent transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-accent">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-text-light/60 items-start">
              <MapPin size={14} className="text-accent shrink-0 mt-1" />
              <div className="text-xs leading-relaxed">
                H. No. 6-2-296/82/A/62, Plot No. 6,<br/>
                Jubilee Hills, Hyderabad – 500033,<br/>
                Telangana, India
              </div>
            </li>
            <li className="flex gap-3 text-text-light/60 items-center">
              <Phone size={14} className="text-accent shrink-0" />
              <span className="text-xs">+91 9010106877</span>
            </li>
            <li className="flex gap-3 text-text-light/60 items-center">
              <Mail size={14} className="text-accent shrink-0" />
              <span className="text-xs">Squareconcepts6877@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-text-light/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-light/40">
        <p>© {new Date().getFullYear()} Square Concepts. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
    </>
  );
}
