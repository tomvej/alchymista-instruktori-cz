import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-scroll';
import {useNavbarContext} from './navbarContext';

const ScrollLink = ({to, ...props}) => {
    const {height} = useNavbarContext();
    return (
        <Link
            href={`#${to}`}
            to={to}
            {...props}
            offset={-height}
            smooth
        />
    );
};

ScrollLink.propTypes = {
    to: PropTypes.string.isRequired,
};

export default ScrollLink;
