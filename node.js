module.exports = {
  extends: ['./core/shared.js', './core/react.js', './core/prettier.js'],
  env: { node: true },
  rules: {
    'no-buffer-constructor': 'warn',
  },
};
