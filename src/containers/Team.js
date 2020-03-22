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
            <h1>Kdo to pořádá?</h1>
            {edges.map(({node: {htmlAst, frontmatter: {name, photo}}}) => (
                <TeamMember
                    key={name}
                    title={name}
                    image={photo.childImageSharp.fluid}
                >
                    {renderMarkdown(htmlAst)}
                </TeamMember>
            ))}
        </>
    );
};
