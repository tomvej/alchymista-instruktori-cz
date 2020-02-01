import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import ResponsiveContainer from './ResponsiveContainer';
import {useNavbarContext} from './navbarContext';

import style from './Navbar.module.scss';

const Navbar = ({brand, children}) => {
    const {setHeight, shrunk} = useNavbarContext();
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible((visible) => !visible);
    const setRef = useCallback((el) => el && setHeight(el.offsetHeight), [setHeight]);

    return (
        <nav
            className={classnames(style.main, {[style.shrunk]: shrunk})}
            ref={setRef}
        >
            <ResponsiveContainer>
                <div className={style.container}>
                    <a
                        href="#top"
                        className={style.brand}
                    >
                        {brand}
                    </a>
                    <button
                        type="button"
                        aria-label="Menu"
                        className={style.toggle}
                        onClick={toggleMenu}
                    >
                        <FAIcon icon={faBars} />
                    </button>
                    <ul className={classnames(style.menu, {[style.menuVisible]: menuVisible})}>
                        {children}
                    </ul>
                </div>
            </ResponsiveContainer>
        </nav>
    );
};

Navbar.propTypes = {
    brand: PropTypes.node,
    children: PropTypes.node,
};

Navbar.defaultProps = {
    brand: null,
    children: null,
};

export default Navbar;
