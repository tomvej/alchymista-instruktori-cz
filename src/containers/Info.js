import {useStaticQuery, graphql} from 'gatsby';
import {renderMarkdown} from '../utils';

export default () => {
    const {info: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            info: file(relativePath: {eq: "info.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return renderMarkdown(htmlAst);
};
