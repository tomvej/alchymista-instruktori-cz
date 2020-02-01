import React, {createContext, useContext, useState, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';

const navbarContext = createContext();

export const NavbarContextProvider = ({children}) => {
    const [height, setHeight] = useState(0);
    const [shrunk, setShrunk] = useState(true);

    const value = useMemo(() => ({height, setHeight, shrunk}), [height, setHeight, shrunk]);

    useEffect(() => {
        const onScroll = () => {
            setShrunk(window.scrollY <= height);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    });

    return (
        <navbarContext.Provider value={value}>
            {children}
        </navbarContext.Provider>
    );
};

NavbarContextProvider.propTypes = {
    children: PropTypes.node,
};

NavbarContextProvider.defaultProps = {
    children: null,
};

export const useNavbarContext = () => useContext(navbarContext);
