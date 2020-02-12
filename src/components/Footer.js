import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveContainer from './ResponsiveContainer';

import style from './Footer.module.scss';

const Footer = ({children, year, author}) => (
    <footer className={style.main}>
        <ResponsiveContainer className={style.container}>
            {children}
            <p>Copyright &copy; {author} {year}</p>
        </ResponsiveContainer>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.node,
    year: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    children: null,
};

export default Footer;
