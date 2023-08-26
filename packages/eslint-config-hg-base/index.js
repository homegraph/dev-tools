module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-typescript/base',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {
    'max-len': 0,
    'no-multiple-empty-lines': 0,
    'import/no-import-module-exports': 0,
    'import/no-relative-packages': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
  },
};
