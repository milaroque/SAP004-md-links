module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'prefer-promise-reject-errors': 'off',
  },
};
