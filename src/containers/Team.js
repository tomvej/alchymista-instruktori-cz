import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {renderMarkdown} from '../utils';
import {TeamMember} from '../components';

export default () => {
    const {team: {edges}} = useStaticQuery(graphql`
        query {
            team: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/team/*.md"}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            civil {
                                childImageSharp {
                                    fluid(maxWidth: 500) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            costume {
                                childImageSharp {
                                    fluid(maxWidth: 500) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        htmlAst
                    }
                }
            }
        }
    `);

    return (
        <>
            <h1>Tým</h1>
            {edges.map(({node: {htmlAst, frontmatter: {name, civil, costume}}}) => (
                <TeamMember
                    title={name}
                    civil={civil.childImageSharp.fluid}
                    costume={costume.childImageSharp.fluid}
                >
                    {renderMarkdown(htmlAst)}
                </TeamMember>
            ))}
        </>
    );
};
