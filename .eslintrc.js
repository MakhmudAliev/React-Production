module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/jsx-runtime', 'standard-with-typescript', 'plugin:i18next/recommended'],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/config/jest/**/*.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', 'i18next', 'jest', '@typescript-eslint', 'react-hooks'],
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
    'i18next/no-literal-string': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
