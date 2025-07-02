const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');

// It's safer to write a known-good object than to try and parse a broken string
const packageJson = {
  "name": "zaktai-website",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tailwindcss -i .\\src\\css\\input.css -o .\\dist\\css\\output.css"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zaktailimited/zaktai-website.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/zaktailimited/zaktai-website/issues"
  },
  "homepage": "https://github.com/zaktailimited/zaktai-website#readme",
  "description": "",
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.11"
  }
};

// The "build" script for Windows should use backslashes and doesn't need the node_modules/.bin prefix when run via npm scripts.
// NPM automatically adds the local binaries to the path.
packageJson.scripts.build = "tailwindcss -i .\\src\\css\\input.css -o .\\dist\\css\\output.css --minify";


fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('package.json has been corrected.');
