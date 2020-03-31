import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Box, renderMarkdown} from '../components';

export default () => {
    const {text: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            text: file(relativePath: {eq: "pandemic.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return (
        <Box>
            {renderMarkdown(htmlAst)}
        </Box>
    )
};
