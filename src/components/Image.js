import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import style from './Image.module.scss';

const Image = ({fluid}) => (
    <GatsbyImage
        fluid={fluid}
        className={style.main}
    />
);

Image.propTypes = {
    fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Image;
