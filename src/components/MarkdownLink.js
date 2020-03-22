import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from './ScrollLink';

const MarkdownLink = ({href, ...props}) => (
    href.startsWith('#') ? <ScrollLink {...props} to={href.substring(1)} /> : <a {...props} href={href} />
);

MarkdownLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default MarkdownLink;
