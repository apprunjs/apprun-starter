import Page401 from './common/401';
import Page404 from './common/404';
import Page500 from './common/500';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

export default [
  // error pages
  [Page401, '///401'],
  [Page404, '///'],
  [Page500, '///500'],

  // add your pages here
  [Home, '#'],
  [About, '#About'],
  [Contact, '#Contact'],

] as (readonly [any, string])[];
