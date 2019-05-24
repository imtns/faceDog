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
    extends: 'standard',
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
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'indent': [2, 4],
        'object-shorthand': [2, "always"],
        "semi": [2, "always"],
        'no-unused-expressions': ["error", {
            "allowShortCircuit": true
        }],
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0
      }
}
