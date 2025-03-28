/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.cjs'],
  extends: ['@mgmg/eslint-config/index.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
