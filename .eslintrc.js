module.exports = {
    extends: 'airbnb',
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

        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    },
}
