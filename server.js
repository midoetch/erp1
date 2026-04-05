const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 5000;
const HOST = '0.0.0.0';
const ROOT = path.join(__dirname, 'stitch_frontend');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.md': 'text/markdown',
};

// Cache duration per file type (in seconds).
// HTML: no-cache so page edits are always visible.
// Assets (JS/CSS/images): 5 minutes — browser reuses without a round-trip.
const cachePolicy = {
  '.html': 'no-cache',
  '.css':  'public, max-age=300',
  '.js':   'no-cache',
  '.png':  'public, max-age=3600',
  '.jpg':  'public, max-age=3600',
  '.jpeg': 'public, max-age=3600',
  '.gif':  'public, max-age=3600',
  '.svg':  'public, max-age=3600',
  '.ico':  'public, max-age=86400',
  '.json': 'no-cache',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Try index.html in directory
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (err2, stats2) => {
        if (err2 || !stats2.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        serveFile(indexPath, stats2, res, req);
      });
      return;
    }
    serveFile(filePath, stats, res, req);
  });
});

function serveFile(filePath, stats, res, req) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const cacheControl = cachePolicy[ext] || 'no-cache';

  // ETag based on file size + last-modified — enables fast 304 responses
  const etag = `"${stats.size}-${stats.mtimeMs}"`;

  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304, {
      'Cache-Control': cacheControl,
      'ETag': etag,
    });
    res.end();
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheControl,
      'ETag': etag,
      'Last-Modified': stats.mtime.toUTCString(),
    });
    res.end(data);
  });
}

server.listen(PORT, HOST, () => {
  console.log(`Noria ERP server running at http://${HOST}:${PORT}`);
});
