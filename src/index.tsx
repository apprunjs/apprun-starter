import app from 'apprun-site/dist'; // <== !IMPORTANT!
import layout from './layout/index';
import pages, {links} from './_lib/index';

const site = {
  title: 'My App',
  element: 'main',
  nav: [],
  sidebar: links,
  layout,
  pages,
};
app.start(site);
