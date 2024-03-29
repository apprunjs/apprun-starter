## AppRun-Starter

This site is built with [AppRun-Site](https://github.com/yysun/apprun-site).

> [AppRun-Site](https://github.com/yysun/apprun-site) is a command-line tool for building modern web applications with [AppRun](https://github.com/yysun/apprun).  It consists of three features:

> * A build command compiles your code to ES Modules with [esbuild](https://esbuild.github.io/).
> * A build command option renders your pages to create a static website
> * A development server that supports your code run as Single Page Applications (SPA) and supports Server-Side Rendering (SSR)

This site has the following structure:

```
/api
  /products.js        <- demo of API
/components
  /comic.tsx          <- demo of a web component
  /layout.tsx         <- layout component
/pages
  /main.tsx           <- start up code (register web component and renders the layout)
  /index.md           <- home page
  /docs
    /index.md         <- docs page
  /about
    /index.md         <- about page (demo of web component)
  /products
    /index.tsx        <- products page (demo of API call)
/public
```


 You can tart the dev server and see the site from [http://localhost:8080](http://localhost:8080) as an Single Page App.

```bash
npm start
```

To generate a static web site, run the _npm run render_ command. The static web site is created in the _public_ directory.

```bash
npm run render
```

Have fun!