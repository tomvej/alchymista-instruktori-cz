import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import style from './Background.module.scss';

const Background = ({children}) => {
    const {background: {childImageSharp: {fluid}}} = useStaticQuery(graphql`
        query {
            background: file(relativePath: {eq: "background.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <BackgroundImage
            fluid={[style.gradient, fluid]}
            className={style.main}
        >
            {children}
        </BackgroundImage>
    );
};

Background.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Background;
