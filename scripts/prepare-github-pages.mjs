import { copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const clientDirectory = path.resolve('dist/client');
const routes = ['info', 'registration'];

// GITHUB PAGES: Create folder-based URLs such as /CADG2026/info/.
for (const route of routes) {
  const source = path.join(clientDirectory, `${route}.html`);
  const destinationDirectory = path.join(clientDirectory, route);
  await mkdir(destinationDirectory, { recursive: true });
  await copyFile(source, path.join(destinationDirectory, 'index.html'));
}

// Keep local high-resolution backups out of the published artifact.
const originalImageBackup = path.join(clientDirectory, 'images', 'orignal');
if (originalImageBackup.startsWith(`${clientDirectory}${path.sep}`)) {
  await rm(originalImageBackup, { recursive: true, force: true });
}

