import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {createMarkdownRenderer} from '../utils';

const renderMarkdown = createMarkdownRenderer({
    p: 'li',
});

const renderNodes = (children) => renderMarkdown({type: 'root', children});

const isTitle = ({type, tagName}) => type === 'element' && tagName === 'h1';

export default () => {
    const {fragments: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            fragments: file(relativePath: {eq: "fragments.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    const {children: childNodes} = htmlAst;

    return (
        <>
            {renderMarkdown(childNodes.find(isTitle))}
            <ul>
                {renderNodes(childNodes.filter((node) => !isTitle(node)))}
            </ul>
        </>
    );
};
