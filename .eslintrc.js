// 规则: https://cn.eslint.org/docs/rules/
// started: https://cn.eslint.org/docs/user-guide/getting-started
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:react-hooks/recommended'
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    globals: {
        $: true,
        process: true,
        __dirname: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
        sourceType: 'module',
        ecmaVersion: 6
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'no-await-in-loop': 2,
        'no-duplicate-case': 2,
        'no-ex-assign': 2,
        'no-func-assign': 2,
        'no-obj-calls': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'default-case': 1,
        eqeqeq: 2,
        'no-redeclare': 2,
        'no-unused-expressions': 2,
        strict: 2,
        'no-unused-vars': 2,
        'no-use-before-define': 2,
        camelcase: 2,
        'no-const-assign': 2,
        'no-duplicate-imports': 2,
        'no-var': 2,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
