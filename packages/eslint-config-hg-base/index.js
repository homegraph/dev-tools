module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'max-len': 0,
    'no-multiple-empty-lines': 0,
    'import/no-import-module-exports': 0,
    'import/no-relative-packages': 0,
    'import/prefer-default-export': 1,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
