import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Footer, renderMarkdown} from '../components';

export default () => {
    const {
        site: {siteMetadata: {author, year}},
        text: {childMarkdownRemark: {htmlAst}},
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    year
                }
            }
            text: file(relativePath: {eq: "footer.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    return (
        <Footer
            author={author}
            year={year}
        >
            {renderMarkdown(htmlAst)}
        </Footer>
    );
};
