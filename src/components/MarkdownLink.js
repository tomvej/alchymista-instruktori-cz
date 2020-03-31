import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from './ScrollLink';

const MarkdownLink = ({href, children, ...props}) => (
    href.startsWith('#') ? <ScrollLink {...props} to={href.substring(1)}>{children}</ScrollLink> : <a {...props} href={href}>{children}</a>
);

MarkdownLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default MarkdownLink;
