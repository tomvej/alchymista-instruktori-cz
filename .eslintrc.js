module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaVersion: 6,
    },
    env: {
        browser: true,
    },
    rules: {
        // FORMATTING
        indent: ['error', 4, {
            SwitchCase: 1, // case should be more indented than switch
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'object-curly-spacing': ['error', 'never'],
        'object-curly-newline': ['error', {multiline: true, consistent: true}],
        'curly': ['error', 'all'],

        // REACT
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
        'react/jsx-props-no-spreading': 'off',
    },
}
