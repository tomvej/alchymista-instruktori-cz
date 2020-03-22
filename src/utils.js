import RehypeReact from 'rehype-react';
import React, {createElement, Fragment} from 'react';
import classnames from 'classnames';
import emailValidator from 'email-validator';
import queryString from 'query-string';

export const noop = () => {};

export const seq = (length) => Array.from({length}).map((_, index) => index);

export const preventDevault = (handler) => (event) => {
    event.preventDefault();
    handler(event);
};

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    createElement,
    Fragment,
    components,
}).Compiler;

export const renderMarkdown = createMarkdownRenderer();

export const required = (value) => ((value !== null && value !== undefined && value !== '') ? undefined : 'Toto pole je povinné.');

export const validEmail = (value) => (emailValidator.validate(value) ? undefined : 'Toto není e-mailová adresa.');

export const composeValidations = (validations) => (value) => validations
    .map((validation) => validation(value))
    .find((result) => result !== undefined);

export const styled = (style, Tag) => ({className, ...props}) => (
    <Tag {...props} className={classnames(style, className)} />
);

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

export const submitForm = (action, values) => fetch(`${CORS_URL}${action}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});
