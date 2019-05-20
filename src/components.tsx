import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

export default [
  [Home, '#'],
  [Contact, '#Contact'],
  [About, '#About']
  
] as (readonly [any, string])[];
