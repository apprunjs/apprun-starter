Quick Start

[[toc]]

## Create a Site

To create a new AppRun Site, run the following command in terminal:

```sh
npm init apprun-app [my-app]
```

And then select the `AppRun Site` template. An AppRun-Site project has the following structure:

```
/pages              <- pages of the website
  /index.html       <- index page
  /index.md         <- home page
  /main.tsx         <- start up code (registers web component and renders the layout)
  /about
    index.md        <- about page, markdown
  /contact
    contact.tsx     <- contact page, AppRun component
```

Then, you can use:

* _npm start_ to start the dev server
* _npm run build_ to build for production
* _npm run render_ to build a static website

## Add Pages

You can add tsx/jsx files (AppRun components, class or functional), markdown, or html files to the `pages` directory.

* Example of a AppRun class component page:
```javascript
import { app, Component } from 'apprun';
export default class ContactComponent extends Component {
  state = '...';
  view = state => <div>
    <h2>{state}</h2>
    <p>This is a class Component</p>
  </div>;
}
```

* Example of a AppRun funtional component page:
```javascript
import app from 'apprun';
export default () => <>
  <h2>...</h2>
  <p>This is a functional Component</p>
</>
```

* Example of a markdown page:
```markdown
# Hello Web Component
This is a demo page to display a comic from XKCD using a web component.
<ws-comic></ws-comic>
```

All the pages will be compiled to the ES modules into the `public` directory when you build the site.

## Routing

You don't need to write any code to route an URL to a component. When users visit an URL, e.g., when the URL in the browser address bar becomes http://.../contact, it triggers the _/contact_ event. The _Contact component_ reacts to the _/contact_ and renders itself to the screen. The event handler for the _/contact_ event is automatically injected.

### Routing Parameters

However, if you want to pass parameters to the component through the URL, you can create your event handler.

```javascript
import { app, Component } from 'apprun';
export default class extends Component {
  state = async () => { ... }
  view = state => <div>...</div>;
  update = {
    '/products': async (state, id) => {
      state = await Promise.resolve(state);
      return ({ ...state, id: parseInt(id) })
    }
  };
}
```
When the URL in the browser address bar becomes http://.../products/1, it triggers the _/products_ event and passes the _1_ as the parameter to your event handler.

### Pretty Links

AppRun-Site by default supports pretty links (a.k.a. non-hash links), e.g., http://.../products/1. You don't need to write any code to support pretty links either. However, you will need a webserver to serve the _index.html_ when the routes don't exist on the server.

> The AppRun-Site dev server provides such capability of serving _index.html_ when the routes don't exist.

## Build

The _build_ command scans your pages in the `pages` directory and compiles them into the `public` directory.

```
/public             <- *** compiled site ***
  /index.html       <- copied from `pages/index.html`
  /index.js         <- compiled from `pages/index.md`
  /main.js          <- compiled from `pages/main.tsx` and some bootstrap code
  /about
    index.js        <- compiled from `pages/about/index.tsx`
  /contact
    index.js        <- compiled from `pages/contact/index.tsx`

/pages              <- source pages
  /index.html       <- index page
  /index.md         <- home page
  /main.tsx         <- start up code
  /about
    index.md        <- about page, markdown
  /contact
    contact.tsx     <- contact page, AppRun component
```

## Dev Server

The _npm start_ command starts a dev server at http://localhost:8080. The dev server serves _index.html_ when the routes don't exist to support Single Page Apps. It also has the capability of server-side rendering to support pretty links and static site creation.


## Static Site

The _render_ command downloads them into the `public` directory by leveraging the dev server's server-side rendering to create a static site.

```
/public             <- compiled site
  /index.html       <- copied
  /index.js         <- compiled
  /main.js          <- compiled
  /about
    /index.html     <- *** server-side rendered page ***
    index.js        <- compiled
  /contact
    /index.html     <- *** server-side rendered page ***
    index.js        <- compiled

/pages              <- sorrce pages
  /index.html       <- index page
  /index.md         <- home page
  /main.tsx         <- start up code
  /about
    index.md        <- about page, markdown
  /contact
    contact.tsx     <- contact page, AppRun component`
```

With all the HTML pages created, you can deploy the static website.


Have fun!

.
