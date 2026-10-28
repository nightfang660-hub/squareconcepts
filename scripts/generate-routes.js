import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  'about',
  'services',
  'projects',
  'contact',
  'consultation',
  'services/modular-kitchens',
  'services/custom-wardrobes',
  'services/turnkey-interiors',
  'services/residential-interiors',
  'services/3d-design',
  'services/renovation-remodeling',
  'services/furniture',
  'services/wall-paneling',
  'services/smart-home',
  'projects/1',
  'projects/2',
  'projects/3',
  'projects/4',
  'projects/5'
];

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    // Create 404.html fallback
    fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf-8');

    // Create directory and index.html for each route
    for (const route of routes) {
      const routeDir = path.join(distDir, route);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml, 'utf-8');
    }
    console.log(`[Success] Generated physical static entrypoints for all ${routes.length} routes + 404.html in dist/`);
  } else {
    console.warn('[Warning] dist/index.html not found, skipping route generation.');
  }
} else {
  console.warn('[Warning] dist directory does not exist, skipping route generation.');
}
