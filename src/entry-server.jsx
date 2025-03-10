import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

// Add data fetching for static generation
// async function fetchInitialData(url) {
//   // This is where you'd fetch any data needed for the page
//   return {
//     products: [], // Fetch your products here
//     events: [],   // Fetch your events here
//   };
// }

// Export the render function that will be used by the prerender script
export async function prerender(url, context = {}) {
  try {
    // Fetch data needed for this route
    // const state = await fetchInitialData(url);

    // Render the app to string
    const appHtml = ReactDOMServer.renderToString(
      React.createElement(StaticRouter, { location: url, context },
        React.createElement(App)
      )
    );

    // Return the complete HTML structure, not just the app content
    const html = `<div id="root">${appHtml}</div>`;

    return { html };
  } catch (error) {
    console.error(`Error rendering ${url}:`, error);
    return { html: '<div>Error rendering page</div>' };
  }
}

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  )
}

