#!/usr/bin/env node
const builder = require('esbuild');
const server = require('apprun-dev-server');

const entryPoints = ['src/main.tsx',
  'src/coreui/layout.tsx',
  'src/bootstrap4/layout.tsx',
  'src/bootstrap5/layout.tsx',
  'src/material/layout.tsx',
  'src/tailwind/layout.tsx',
  'src/Home.tsx', 'src/About.tsx', 'src/Contact.tsx'];

const build = (watch = false) => builder.build({
  entryPoints,
  outdir: 'public/dist',
  format: 'esm',
  bundle: true,
  minify: true,
  sourcemap: true,
  watch
});

const start = () => {
  server.start({
    host: 'localhost',
    port: process.env.PORT || 8080,
    root: 'public'
  });
}

if (!process.argv[2]) {
  build();
} else {
  build(true);
  start();
}