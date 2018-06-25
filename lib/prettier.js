const readPrettierConfig = require('./utils/readPrettierConfig');

const defaultPrettierConfig = {
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  jsxBracketSameLine: true,
};

module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [1, readPrettierConfig() || defaultPrettierConfig],
  },
};
