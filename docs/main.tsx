import app from 'apprun';
window.onload = () => {
  const add_component = (component, site_url, main_element) => {
    let [path, file] = component;
    app.once(path, async (...p) => {
      const module = await import(`${site_url}${file}`);
      const component = new module.default();
      component.mount(main_element, { route: path });
      app.route([path, ...p].join('/'));
    });
  };
  const components = [["/","/index.js"],["/products","/products/index.js"],["/about","/about/index.js"],["/contact","/contact/index.js"]];
  const app_element = window["app-element"] || document.body
  components.forEach(item => add_component(item, '', app_element));
  app.route(location.pathname);
};

document.body.addEventListener('click', e => {
  const element = e.target as HTMLElement;
  const menu = (element.tagName === 'A' ? element : element.closest('a')) as HTMLAnchorElement;
  if (menu && menu.pathname.startsWith('/')) {
    e.preventDefault();
    history.pushState(null, '', menu.href);
    app.route(menu.pathname);
  }
});

import main from '/Users/esun/Documents/Projects/apprun-starter/pages/main.tsx';
export default main;
main();

