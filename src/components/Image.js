import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GatsbyImage from 'gatsby-image';

import style from './Image.module.scss';

const Image = ({fluid, className}) => (
    <GatsbyImage
        fluid={fluid}
        className={classnames(style.main, className)}
    />
);

Image.propTypes = {
    fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
};

Image.defaultProps = {
    className: null,
};

export default Image;
