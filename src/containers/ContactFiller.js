import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Image} from '../components';

export default () => {
    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "stih.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Image fluid={image.childImageSharp.fluid} />
    );
};
