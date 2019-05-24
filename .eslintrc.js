module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    env: {
        browser: true
    },
    extends: 'airbnb-base',
    plugins: ['html'],
    globals: {
        wx: true,
        Page: true,
        requirePlugin: true
    },
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".wpy"
                ]
            }
        },
        'html/html-extensions': ['.html', '.wpy']
    },
    'rules': {
        "no-param-reassign": 0,
        'linebreak-style': 0,
        'indent': [2, 4],
        'radix': ['error', 'as-needed'],
        'no-bitwise': ['error', {
            'allow': ['~']
        }],
        'object-shorthand': ['error', 'methods'],
        'no-unused-expressions': ["error", {
            "allowShortCircuit": true
        }],
        "consistent-return": 0,
        "space-before-function-paren": 0,
        'max-len': [2, 180, 4, { "ignoreUrls": true }],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        "no-shadow": [2, { "allow": ["data"] }],
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': 0,
        'space-before-function-paren': 0,
        'class-methods-use-this': 0,
        'no-plusplus': 'off',
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'wpy': 'never'
        }],
        "no-underscore-dangle": ["error", { "allow": ["_url", "_self", "_im"] }],
    }
}
