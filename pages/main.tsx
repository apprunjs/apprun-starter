import app from 'apprun';
import Layout from '../components/layout'
import Comic from '../components/comic';

export default () => {
  app.webComponent('ws-comic', Comic);
  app.render(document.body, <Layout />);
}
