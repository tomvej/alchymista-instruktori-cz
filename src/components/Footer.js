import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveContainer from './ResponsiveContainer';

import style from './Footer.module.scss';
import Center from './Center';

const Footer = ({children, year, author}) => (
    <footer className={style.main}>
        <ResponsiveContainer className={style.container}>
            <Center>
                {children}
                <p>Copyright &copy; {author} {year}</p>
            </Center>
        </ResponsiveContainer>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.node,
    year: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    children: null,
};

export default Footer;
