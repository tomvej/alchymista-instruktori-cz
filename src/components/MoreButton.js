import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from './ScrollLink';

const MoreButton = ({to}) => (
    <ScrollLink to={to}>More</ScrollLink>
);

MoreButton.propTypes = {
    to: PropTypes.string.isRequired,
};

export default MoreButton;
