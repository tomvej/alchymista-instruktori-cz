export default (ast, level = 2) => {
    const isHeading = ({type, tagName}) => type === 'element' && tagName === `h${level}`;

    const {children} = ast;
    const firstHeadingIndex = children.findIndex(isHeading);

    const sections = [];
    for (let index = firstHeadingIndex; index < children.length; index += 1) {
        const node = children[index];
        if (isHeading(node)) {
            sections.push({heading: node, children: []});
        } else {
            sections[sections.length - 1].children.push(node);
        }
    }

    return [
        children.slice(0, firstHeadingIndex),
        sections,
    ];
};
