import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {AboutSection, renderMarkdown} from '../components';

export default () => {
    const {text: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            text: file(relativePath: {eq: "about.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return (
        <AboutSection>
            {renderMarkdown(htmlAst)}
        </AboutSection>
    );
};
