import {graphql, useStaticQuery} from 'gatsby';
import {renderMarkdown} from '../utils';


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

    return renderMarkdown(htmlAst);
};
