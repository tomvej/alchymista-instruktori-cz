/* eslint-disable import/prefer-default-export */
import React from 'react';
import {NavbarContextProvider} from './src/components';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        {element}
    </NavbarContextProvider>
);
