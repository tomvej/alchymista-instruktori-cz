import React from 'react';
import PropTypes from 'prop-types';
import ScrollLink from './ScrollLink';

import style from './Navlink.module.scss';

const Navlink = ({to, children}) => (
    <li className={style.main}>
        <ScrollLink
            spy
            hashSpy
            to={to}
            className={style.link}
        >
            {children}
        </ScrollLink>
    </li>
);

Navlink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Navlink.defaultProps = {
    children: null,
};

export default Navlink;
