import app from 'apprun';
import Layout from './_src/layout'

export default () => {

  window['app-element'] = 'my-app';
  app.render(document.body, <Layout />);

}
