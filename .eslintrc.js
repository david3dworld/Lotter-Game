module.exports = {
  root: true,
  env: {
    jest: true,
    es2020: true,
    node: true,
    browser: true
  },
  extends: ['prettier', 'plugin:vue/vue3-recommended', 'eslint:recommended'],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
};
