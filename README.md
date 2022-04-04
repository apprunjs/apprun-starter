## AppRun-Site

*AppRun-Site* is a command-line tool for building modern web applications with [AppRun](https://github.com/yysun/apprun).  It consists of three features:

* A build command compiles your code to ES Modules with [esbuild](https://esbuild.github.io/)

* A development server that supports your code run as Single Page Applications(SPA) and supports Server-Side Rendering (SSR).

* A command to pre-render your SPA and SSR pages to static HTML files.


## Installation

  ```bash
  npx apprun-site init [project-name]
  cd [project-name]
  npm install
  ```

## Add Pages

Add pages to the directory `pages`; they can be HTML files, markdown files, and tsx/jsx files (AppRun components).



## Run the server

```bash
npm run start
```


## Build for production

```bash
npm run build
```


## Pre-render pages

```bash
npm run prerender
```




License: MIT

Have Fun!

(C) 2022 Yiyi Sun

