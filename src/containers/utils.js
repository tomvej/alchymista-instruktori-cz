/* eslint-disable import/prefer-default-export */
import {createElement, Fragment} from 'react';
import RehypeReact from 'rehype-react';

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    createElement,
    Fragment,
    components,
}).Compiler;
