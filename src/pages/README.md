# AppRun Starter

## Introduction

This is an application built iwth [AppRun Site](https://github.com/yysun/apprun-site), an framework for building [AppRun](https://github.com/yysun/apprun) applications. It has the following structure.

```
public/
src/
  layout/
  layout-bootstrap/
  layout-coreui/
  layout-material/
  pages/
    home.tsx
    contact.tsx
    about.tsx
  index.tsx   <=== main entry
  tsconfig.json
.gitignore
package.json
webpack.config.js
```
## Run the Application

Use _npm_ commands

* Use _npm install_ to install apprun, typescript and webpack
* Use _npm start_ to start the dev server
* Use _npm run build_ to build for production


## Public Directory

The **public** directory contains the files you can deploy to your hosting server.

## Layouts

There are four layouts included under the **src/** directory for you to try out.

* Default
* Bootstrap
* CoreUI
* Material Design

## Switch Layouts

You can rename the layout directory to switch the layouts.

### To use the bootstrap layout

* copy **index.html** from _layout-bootstrap_ to _public_
* rename _layout-bootstrap_ to _layout_

### To use the coreUI layout

* copy **index.html** from _layout-coreui_ to _public_
* rename _layout-coreui_ to _layout_


### To use the material layout

* copy **index.html** and **style.css** from _layout-material_ to _public_
* rename _layout-material_ to _layout_


### Use Your Own Layout

You can create your own layout in the layout directory.


## Pages

The pages are under the **src/pages** directory. The pages can be AppRun components, HTML files or markdown files.

> Try to edit the sample pages: home, contact and about. And add or delete some pages. If you have started the app using _npm start_, you changes should be displayed in the browser automatically.


## WPA

This application includes a service worker. from [PWA Builder](https://www.pwabuilder.com/).

The service worker improves the performance of your app, and make it work offline. The advanced caching service worker allows you to configure files and routes that are cached in different manners (pre-cache, network/server first, cache first, etc.).

### Register the Service Worker

To register the service worker, include the script in the header section of the **index.html** file.

```
<script src="sw-init.js"></script>
```

### Configure the Service Worker

To configure the service worker, open and edit the **sw.js** file.


```javascript
const CACHE = "pwabuilder-adv-cache";
const precacheFiles = [
  "index.html",
  "app.js",
  "style.css"
];

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

const networkFirstPaths = [
  /* Add an array of regex of paths that should go network first */
  // Example: /\/api\/.*/
];

const avoidCachingPaths = [
  /* Add an array of regex of paths that shouldn't be cached */
  // Example: /\/api\/.*/
  /\/sockjs-node\/*/
];

```



Happy Coding.