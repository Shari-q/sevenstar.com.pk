import fs from 'fs';
import path from 'path';

const htmlPath = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\18688b83-5eb1-424c-8223-0127139d1c3e\\scratch\\sevenstar.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const regex = /<rs-slide[\s\S]*?<\/rs-slide>/gi;
const rsSlides = html.match(regex) || [];

rsSlides.forEach((s, idx) => {
  console.log(`\n================ SLIDE ${idx + 1} ================`);
  const lazyMatch = s.match(/data-lazyload=["']([^"']+)["']/i);
  const srcMatch = s.match(/src=["']([^"']+\.(?:jpg|png|webp|jpeg))["']/i);
  const bgMatch = s.match(/data-bg=["']([^"']+)["']/i);
  const thumbMatch = s.match(/data-thumb=["']([^"']+)["']/i);
  console.log('data-lazyload:', lazyMatch ? lazyMatch[1] : 'none');
  console.log('src:', srcMatch ? srcMatch[1] : 'none');
  console.log('thumb:', thumbMatch ? thumbMatch[1] : 'none');
});
