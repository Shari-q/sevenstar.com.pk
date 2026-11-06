const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'sevenstar.html'), 'utf8');

const idx = html.indexOf('data-lazyload');
if (idx !== -1) {
  console.log('Context around data-lazyload:');
  console.log(html.slice(idx - 200, idx + 800));
} else {
  console.log('Not found');
}
