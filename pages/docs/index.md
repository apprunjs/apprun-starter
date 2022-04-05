To create a new AppRun Site:

  ```bash
  npx apprun-site init [project-name]
  cd [project-name]
  npm install
  ```

Add pages to the directory `pages`; they can be HTML files, markdown files, and tsx/jsx files (AppRun components).

Run the server:

```bash
npm run start
```

Build for production:

```bash
npm run build
```

Pre-render pages:

```bash
npm run prerender
```