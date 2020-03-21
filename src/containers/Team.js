import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {renderMarkdown} from '../utils';
import {TeamMember} from '../components';

export default () => {
    const {team: {edges}} = useStaticQuery(graphql`
        query {
            team: allMarkdownRemark(
                filter: {fileAbsolutePath: {glob: "**/team/*.md"}}
                sort: {fields: [frontmatter___order]}
            ) {
                edges {
                    node {
                        frontmatter {
                            name
                            photo {
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
            {edges.map(({node: {htmlAst, frontmatter: {name, photo,}}}) => (
                <TeamMember
                    title={name}
                    image={photo.childImageSharp.fluid}
                >
                    {renderMarkdown(htmlAst)}
                </TeamMember>
            ))}
        </>
    );
};
