module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    generators: true,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['react', '@typescript-eslint', 'eslint-comments', 'react-hooks', 'import', 'jsx-a11y'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {},
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    '@typescript-eslint/camelcase': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/order': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-named-as-default': 'off',
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'no-await-in-loop': 'off', // oh, really eslint?
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-continue': 'off',
    '@typescript-eslint/return-await': 'off',
    'eol-last': ['error', 'always'],
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 0,
    'no-restricted-syntax': [
      // allowing "for of" since it's supported by all browsers already
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: 'with is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off', // temporary fix; TODO re-enable after fixing import cycles
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "off",
    "@typescript-eslint/default-param-last": "off",
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 140, ignoreComments: true }]
  },
};
