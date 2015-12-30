require('babel-core/register');
// set up css-modules
const sass = require('node-sass');
const path = require('path');
const hook = require('css-modules-require-hook');

const nodeModules = path.resolve(__dirname, '../node_modules');

hook({
  extensions: ['.scss'],
  preprocessCss: (data, file) => sass.renderSync({file, data, includePaths: [nodeModules]}).css
});

const React = require('react');
const ReactDOM = require('react-dom/server');
const TestComponent = require('./TestComponent').default;

const markup = ReactDOM.renderToString(TestComponent());

console.log(markup);
