import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {createMarkdownRenderer} from '../utils';
import {FragmentList, TwoColumnGallery} from '../components';

const renderMarkdown = createMarkdownRenderer({
    p: 'li',
});

const renderNodes = (children) => renderMarkdown({type: 'root', children});

const isTitle = ({type, tagName}) => type === 'element' && tagName === 'h1';

export default () => {
    const {fragments: {childMarkdownRemark: {htmlAst, frontmatter: {images}}}} = useStaticQuery(graphql`
        query {
            fragments: file(relativePath: {eq: "fragments.md"}) {
                childMarkdownRemark {
                    htmlAst
                    frontmatter {
                        images {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const fluidImages = images.map(({childImageSharp: {fluid}}) => fluid);
    const {children: childNodes} = htmlAst;

    return (
        <>
            {renderMarkdown(childNodes.find(isTitle))}
            <TwoColumnGallery images={fluidImages}>
                <FragmentList>
                    {renderNodes(childNodes.filter((node) => !isTitle(node)))}
                </FragmentList>
            </TwoColumnGallery>
        </>
    );
};
