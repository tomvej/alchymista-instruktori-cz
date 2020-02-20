import React from 'react';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {NavbarContextProvider} from './src/components';

config.autoAddCss = false;

export const onClientEntry = () => {
    /* IntersectionObserver polyfill for IE11 */
    if (!('InterSectionObserver' in window)) {
        import('intersection-observer'); // eslint-disable-line no-unused-expressions
    }
};

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        {element}
    </NavbarContextProvider>
);
