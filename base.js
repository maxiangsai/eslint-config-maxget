module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许在全局作用域下使用 return
      globalReturn: false,
      // 启用全局 strict mode，与 use strict 相同
      impliedStrict: true,
      // 启用 jsx
      jsx: true,
    },
    // 没有 .babelrc 文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false
  },
  extends: ['eslint:recommended'],
  root: true,
  rules: {
    // 除了 null 可以使用 ==，其他用 ===
    'eqeqeq': ["error", "allow-null"],
    'semi': 2,
    'prefer-const': ['error'],
    'no-var': 'error',
    'import/prefer-default-export': 0,
  }
}
