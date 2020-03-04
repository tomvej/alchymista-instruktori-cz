import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {createMarkdownRenderer} from '../utils';

const renderMarkdown = createMarkdownRenderer({
    p: 'li',
});

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

    return (
        <ul>
            {renderMarkdown(htmlAst)}
        </ul>
    );
};
