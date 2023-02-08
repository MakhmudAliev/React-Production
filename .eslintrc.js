module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/jsx-runtime', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
