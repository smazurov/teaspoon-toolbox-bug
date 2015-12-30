import { jsdom } from 'jsdom';
import sass from 'node-sass';
import path from 'path';

const hook = require('css-modules-require-hook');

const nodeModules = path.resolve(__dirname, '../node_modules');

hook({
  extensions: ['.scss'],
  preprocessCss: (data, file) => sass.renderSync({file, data, includePaths: [nodeModules]}).css
});

// set dev_tools for testing to false
global.__DEV_TOOLS__ = false;

global.document = jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};
global.HTMLElement = require('jsdom/lib/jsdom/level1/core').HTMLElement;
