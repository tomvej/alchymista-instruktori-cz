import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GatsbyImage from 'gatsby-image';

import style from './Image.module.scss';

const Image = ({className, ...props}) => (
    <GatsbyImage
        {...props}
        className={classnames(style.main, className)}
    />
);

Image.propTypes = {
    className: PropTypes.string,
};

Image.defaultProps = {
    className: null,
};

export default Image;
