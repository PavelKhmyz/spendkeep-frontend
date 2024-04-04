module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    '@typescript-eslint/naming-convention': ['error', {
      'selector': 'interface',
      'format': ['PascalCase'],
      'custom': {
        'regex': '^I[A-Z]',
        'match': true
      }
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 140, ignoreComments: true }],
    'semi': ['warn', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'indent': ['error', 2, { 'SwitchCase': 1, 'ignoredNodes': ['PropertyDefinition'] }],
    'no-console': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'eqeqeq': 'warn',
    'strict': ['error', 'safe'],
    'brace-style': ['warn', '1tbs'],
  },
}
