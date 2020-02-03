const visit = require('unist-util-visit');
const Hypher = require('hypher');
const czech = require('hyphenation.cs');

const pipe = (...fns) => (arg) => fns.reduce((result, fn) => fn(result), arg);

const hyphenator = new Hypher(czech);
const hyphenate = (text) => hyphenator.hyphenateText(text);

const replaceOneLetterPrepositions = (text) => text.replace(/(\s[kKoOsSuUvVzZ]) ([A-Za-z]|$)/g, '$1\u00A0$2');

module.exports = ({markdownAST}) => {
    visit(markdownAST, 'text', (node) => {
        // eslint-disable-next-line no-param-reassign
        node.value = pipe(
            hyphenate,
            replaceOneLetterPrepositions,
        )(node.value);
    });
};
