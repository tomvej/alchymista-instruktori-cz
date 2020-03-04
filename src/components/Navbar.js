import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import ResponsiveContainer from './ResponsiveContainer';
import {useNavbarContext} from './navbarContext';

import style from './Navbar.module.scss';
import ScrollLink from './ScrollLink';

const Navbar = ({brand, children, navlinks}) => {
    const {setHeight, shrunk} = useNavbarContext();
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const toggleMenu = () => setMenuVisible((visible) => !visible);
    const setNavbarRef = useCallback((el) => el && setHeight(el.offsetHeight), [setHeight]);
    const setMenuRef = useCallback((el) => el && setMenuHeight(el.scrollHeight), [setMenuHeight]);

    return (
        <nav
            className={classnames(style.main, {[style.shrunk]: shrunk})}
            ref={setNavbarRef}
        >
            <ResponsiveContainer className={style.container}>
                <a
                    href="#top"
                    className={classnames(style.brand, style.link)}
                >
                    {brand}
                </a>
                <button
                    type="button"
                    aria-label="Menu"
                    className={classnames(style.toggle, style.link)}
                    onClick={toggleMenu}
                >
                    <FAIcon icon={faBars} />
                </button>
                <ul
                    className={classnames(style.menu, {[style.menuHidden]: !menuVisible})}
                    style={menuVisible ? {maxHeight: menuHeight} : {}}
                    ref={setMenuRef}
                >
                    {Object.entries(navlinks).map(([to, label]) => (
                        <li key={to} className={style.navItem}>
                            <ScrollLink
                                spy
                                hashSpy
                                to={to}
                                className={classnames(style.navLink, style.link)}
                                activeClass={style.active}
                            >
                                {label}
                            </ScrollLink>
                        </li>
                    ))}
                    {children}
                </ul>
            </ResponsiveContainer>
        </nav>
    );
};

Navbar.propTypes = {
    brand: PropTypes.node,
    children: PropTypes.node,
    navlinks: PropTypes.objectOf(PropTypes.string.isRequired),
};

Navbar.defaultProps = {
    brand: null,
    children: null,
    navlinks: {},
};

export default Navbar;
