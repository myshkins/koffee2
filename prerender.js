import fs from 'fs';
import path from 'node:path'
import url from 'node:url'


const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)
const template = fs.readFileSync(
  toAbsolute('dist/client/index.html'),
  'utf-8')
const { prerender } = await import('./dist/server/entry-server.js')

// Define all routes that need to be pre-rendered
const routes = [
  '/',
  '/shop',
  '/events',
  '/about',
  '/account',
];

// // determine routes to pre-render from src/pages
// const routesToPrerender = fs
//   .readdirSync(toAbsolute('src/pages'))
//   .map((file) => {
//     const name = file.replace(/\.vue$/, '').toLowerCase()
//     return name === 'home' ? `/` : `/${name}`
//   })

async function generatePages() {
  // Generate each route
  for (const url of routes) {
    const { html } = await prerender(url);

    // Replace placeholders in the template
    const renderedHtml = template
      .replace('<!--app-html-->', html)

    // Write the HTML file
    const filePath = `dist/static${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), renderedHtml);
    console.log(`Pre-rendered: ${url}`);
  }
}

// Run the generation
generatePages().catch(console.error);
