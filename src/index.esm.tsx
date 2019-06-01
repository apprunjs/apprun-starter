import app from 'apprun-site';
import layout from './layout/index';
import pages, {links} from './_lib/index-esm';

const site = {
  title: 'My App',
  element: 'main',
  nav: [],
  sidebar: links,
  layout,
  pages,
};

app(site);
