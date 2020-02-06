import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import classnames from 'classnames';

import style from './Button.module.scss';

const Button = ({href, onClick, children, submit, disabled, outline}) => {
    invariant(href || onClick || submit, 'Either href, onClick or submit must be specified.');
    const className = classnames(style.main, {
        [style.outline]: outline,
        [style.disabled]: disabled,
    });
    if (href) {
        return (
            <a
                href={href}
                className={className}
            >
                {children}
            </a>
        );
    } else {
        return (
            // eslint-disable-next-line react/button-has-type
            <button
                type={submit ? 'submit' : 'button'}
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
};

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    submit: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    href: null,
    onClick: null,
    children: null,
    submit: false,
    outline: false,
    disabled: false,
};

export default Button;
