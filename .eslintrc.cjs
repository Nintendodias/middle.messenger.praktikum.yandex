module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    "import/extensions": "off",
    "no-param-reassign": 0,
    "max-len": [2, 100],
    "max-params": [2, 3],
  },
  root: true,
  parserOptions: {
    project: './tsconfig.json'
  }
};