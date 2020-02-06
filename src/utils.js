import RehypeReact from 'rehype-react';
import React, {createElement, Fragment} from 'react';
import classnames from 'classnames';

export const noop = () => {};

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    createElement,
    Fragment,
    components,
}).Compiler;

export const required = (value) => (value ? undefined : 'Toto pole je povinné.');

export const styled = (style, Tag) => ({className, ...props}) => (
    <Tag {...props} className={classnames(style, className)} />
);
