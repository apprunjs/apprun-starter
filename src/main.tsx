import app from 'apprun';

import site_meta from './site.json';
window['site_meta'] = site_meta;

window['add_link'] = (rel, href, type) =>  {
  const link = document.createElement('link');
  rel && (link.rel = rel);
  type && (link.type = type);
  href && (link.href = href);
  document.head.appendChild(link);
};

window['add_css'] = url => new Promise((resolve, reject) => {
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  link.onload = resolve;
  link.onerror = reject;
  document.head.appendChild(link);
});

window['add_js'] = (url, type = null) => new Promise((resolve, reject) => {
  const link = document.createElement('script') as HTMLScriptElement;
  link.src = url;
  (type) ? link.type = type : null;
  link.onload = resolve;
  link.onerror = reject;
  document.body.appendChild(link);
});

const { layout, routes, element } = site_meta;

routes.forEach(({ path, component }) => {
  app.on(path, async () => {
    const module = await import(`./${component}.js`);
    new module.default().start(element);
  });
});

import(`./${layout}.js`).then(async module => {
  const { Layout, styles, scripts, body_class } = module.default || {};
  if (styles) for (let i = 0; i < styles.length; i++) await window['add_css'](styles[i]);
  if(scripts) for (let i = 0; i < scripts.length; i++) await window['add_js'](scripts[i]);
  body_class && document.body.classList.add(...body_class);
  Layout && app.render(document.body, <Layout />);
  app.run('route', location.hash);
});