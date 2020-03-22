import RehypeReact from 'rehype-react';
import {createElement, Fragment} from 'react';
import MarkdownLink from './MarkdownLink';

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    Fragment,
    createElement,
    components: {
        a: MarkdownLink,
        ...components,
    },
}).Compiler;

export const renderMarkdown = createMarkdownRenderer();
