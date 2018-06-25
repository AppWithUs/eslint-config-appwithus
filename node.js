module.exports = {
  extends: ['./lib/core.js', './lib/react.js', './lib/prettier.js'],
  env: { node: true },
  rules: require('./lib/rules/node'),
};
