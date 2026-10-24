export interface Project {
  id: number;
  sNo: number;
  clientName: string;
  title: string;
  location: string;
  projectType: string;
  category: 'Independent House' | 'Duplex' | 'Apartment' | 'Residential';
  status: 'Completed';
  year: string;
  area: string;
  description: string;
  image: string;
  videoId?: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    sNo: 1,
    clientName: 'Arun',
    title: 'Arun — Independent House',
    location: 'Hyderabad',
    projectType: 'Independent House',
    category: 'Independent House',
    status: 'Completed',
    year: '2024',
    area: '4,200 sq.ft',
    description: 'A bespoke independent residence designed with expansive open layouts, custom double-height living spaces, rich natural woodwork, and contemporary architectural lighting tailored specifically for the Arun family in Hyderabad.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    videoId: 'MRy6owOO4fk',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 2,
    sNo: 2,
    clientName: 'Monika',
    title: 'Monika — Bespoke Residence',
    location: 'Hyderabad',
    projectType: 'Not specified',
    category: 'Residential',
    status: 'Completed',
    year: '2024',
    area: '2,600 sq.ft',
    description: 'An elegant interior featuring soft warm neutral palettes, handcrafted fluted wood paneling, customized storage solutions, and serene ambient illumination designed for modern living in Hyderabad.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    videoId: 'E8qSNCa7QV4',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 3,
    sNo: 3,
    clientName: 'Keerthi Reddy',
    title: 'Keerthi Reddy — Luxury Duplex',
    location: 'Hyderabad',
    projectType: 'Duplex',
    category: 'Duplex',
    status: 'Completed',
    year: '2024',
    area: '3,800 sq.ft',
    description: 'A grand duplex transformation highlighting high ceilings, architectural cantilever staircase elements, luxury Italian marble flooring, and customized bespoke furniture designed for high-end luxury.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    videoId: 'U73pzzKFu0E',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 4,
    sNo: 4,
    clientName: 'Bhargav',
    title: 'Bhargav — Rajapushpa Apartment',
    location: 'Hyderabad',
    projectType: 'Rajapushpa Apartment',
    category: 'Apartment',
    status: 'Completed',
    year: '2024',
    area: '2,950 sq.ft',
    description: 'A contemporary luxury apartment at Rajapushpa featuring high-efficiency modular kitchen fixtures, refined false ceiling accents, warm European oak finishes, and smart space planning.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200',
    videoId: 'uL8fLYnjeTc',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 5,
    sNo: 5,
    clientName: 'Nitha',
    title: 'Nitha — Rajapushpa ProvrenShaya',
    location: 'Hyderabad',
    projectType: 'Rajapushpa Apartment – ProvrenShaya',
    category: 'Apartment',
    status: 'Completed',
    year: '2024',
    area: '3,100 sq.ft',
    description: 'High-end interior design and turnkey execution at Rajapushpa ProvrenShaya, incorporating minimalist detailing, automated mood lighting, signature textures, and customized joinery.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    videoId: 'MRy6owOO4fk',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200',
    ],
  },
];
