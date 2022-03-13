// dynamic layout
// import { load_layout } from './apprun_site';
// import { layout } from './site.json';
// load_layout(`${layout}/layout`);

// static layout
import { render_layout } from './apprun_site';
import config from './tailwind/layout';
render_layout(config);