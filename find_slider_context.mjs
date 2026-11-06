import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join('C:\\Users\\PC\\.gemini\\antigravity\\brain\\18688b83-5eb1-424c-8223-0127139d1c3e\\scratch\\sevenstar.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const regex = /<rs-slide[\s\S]*?<\/rs-slide>/gi;
const rsSlides = html.match(regex) || [];
console.log('rs-slide count:', rsSlides.length);

rsSlides.forEach((s, idx) => {
  console.log(`\n================ SLIDE ${idx + 1} ================`);
  const imgMatch = s.match(/(?:data-lazyload|src)=["']([^"']+)["']/i);
  console.log('Image:', imgMatch ? imgMatch[1] : 'none');
  
  const textMatches = [...s.matchAll(/<rs-layer[^>]*>([\s\S]*?)<\/rs-layer>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(t => t.length > 0 && !t.includes('http'));
  console.log('Texts:', textMatches);
});
