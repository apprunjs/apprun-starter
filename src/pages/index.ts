import Page401 from './401';
import Page404 from './404';
import Page500 from './500';

import Home from './home';
import About from './about';
import Contact from './contact';

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
