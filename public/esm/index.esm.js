import app from '/esm/_modules/apprun-site.js';
import layout from '/esm/layout/index.js';
import pages from '/esm/_lib/index-esm.js';
import '/esm/components/web-components/counter.js';
const nav = [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
];
const site = {
    title: 'My AppRun Site',
    element: 'main',
    nav,
    sidebar: nav,
    layout,
    pages,
    eventRoot: '/'
};
app(site);
