import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {MultiRowGallery} from '../components';

export default () => {
    const {images} = useStaticQuery(graphql`
        query {
            images: allFile(
                filter: {sourceInstanceName: {eq: "gallery"}}
                sort: {fields: [relativePath]}
            ) {
                edges {
                    node {
                        childImageSharp {
                            fixed(height: 250) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `);

    const fluidImages = images.edges.map(({node: {childImageSharp: {fixed}}}) => fixed);

    return <MultiRowGallery images={fluidImages} rows={3} />;
};
