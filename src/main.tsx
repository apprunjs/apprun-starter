// directives
import app from 'apprun';

app.on('$', ({ key, props }) => {
  if (key === '$show') {
    const show = props[key];
    props.ref = e => e.style.display = show ? '' : 'none';
  }

  if (key === '$toggle') {
    const [el, cls] = props[key];
    props.onclick = () => {
      document.querySelector(el).classList.toggle(cls);
    }
  }
});



// dynamic layout
// import { load_layout } from './apprun_site';
// import { layout } from './site.json';
// load_layout(`${layout}/layout`);

// static layout
import { render_layout, load_apprun_dev_tools } from './apprun_site';
import layout from './tailwind/layout';
load_apprun_dev_tools();
render_layout(layout);