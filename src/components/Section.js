import React from 'react';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';
import BackgroundImage from 'gatsby-background-image';

import ResponsiveContainer from './ResponsiveContainer';

const Section = ({name, children, bgImage}) => {
    const content = (
        <ResponsiveContainer>
            <Element name={name}>
                {children}
            </Element>
        </ResponsiveContainer>
    );

    if (bgImage) {
        return (
            <BackgroundImage
                Tag="section"
                id={name}
                fluid={bgImage}
            >
                {content}
            </BackgroundImage>
        );
    } else {
        return (
            <section
                id={name}
            >
                {content}
            </section>
        );
    }
};

Section.propTypes = {
    name: PropTypes.string.isRequired,
    bgImage: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    children: PropTypes.node,
};

Section.defaultProps = {
    bgImage: null,
    children: null,
};

export default Section;
