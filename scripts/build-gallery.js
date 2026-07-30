const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const mediaDir = path.join(rootDir, 'media');
const outputPath = path.join(rootDir, 'gallery-data.json');

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']);
const videoExtensions = new Set(['.mp4', '.mov', '.webm', '.avi', '.mkv']);
const supportedExtensions = new Set([...imageExtensions, ...videoExtensions]);

function getMediaType(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  if (imageExtensions.has(extension)) {
    return 'image';
  }
  if (videoExtensions.has(extension)) {
    return 'video';
  }
  return 'unknown';
}

function walkMediaDirectory(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkMediaDirectory(entryPath));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!supportedExtensions.has(extension)) {
      continue;
    }

    const stats = fs.statSync(entryPath);
    files.push({
      name: entry.name,
      path: path.relative(rootDir, entryPath).replace(/\\/g, '/'),
      type: getMediaType(entry.name),
      modifiedAt: stats.mtime.toISOString()
    });
  }

  return files;
}

const mediaFiles = walkMediaDirectory(mediaDir)
  .sort((a, b) => new Date(b.modifiedAt) - new Date(a.modifiedAt));

fs.writeFileSync(outputPath, JSON.stringify(mediaFiles, null, 2) + '\n');
console.log(`Wrote ${mediaFiles.length} media file(s) to ${path.relative(rootDir, outputPath)}`);
