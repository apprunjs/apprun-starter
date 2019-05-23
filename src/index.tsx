import './styles/index.css';

import app from 'apprun';

import Layout from './layout-bootstrap';
import pages from './pages';
import site from './site';

app.render(document.body, <Layout {...site}/>);
const element = document.getElementById('main');
pages.forEach(def => {
  const [Comp, event] = def;
  const component = new Comp().mount(element);
  app.on(event, (...p) => component.run('.', ...p));
});