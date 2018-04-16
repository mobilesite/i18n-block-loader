// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    extends: [
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // allow paren-less arrow functions
      'arrow-parens': 0,
      'semi': 0,
      'no-trailing-spaces': 0,
      'no-undef': 0,
      'no-unused-vars': 0,
      'no-multiple-empty-lines': 0,
      'padded-blocks': 0,
      'keyword-spacing': 0,
      'space-before-function-paren': 0,
      'indent': 0,
      'comma-dangle': 0,
      'no-new': 0,
    }
  }
  