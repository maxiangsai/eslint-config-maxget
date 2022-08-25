module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许在全局作用域下使用 return
      globalReturn: false,
      // 启用全局 strict mode，与 use strict 相同
      impliedStrict: true,
      jsx: true
    },
    // 没有 .babelrc 文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/camelcase': 'error',
    'vue/attributes-order': 'error',
    'vue/multi-word-component-names': 'off', // 允许单个单词为组件名
    'vue/html-indent': ['error', 2], // html 缩进为 
    // 禁止使用超出 js 精度范围的数字
    'vue/no-loss-of-precision': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': [ // 单行属性最多 4 个，多行时最多一行 3 个
      'error',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 3,
        },
      },
    ],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any'
      }
    }]
  }
}
