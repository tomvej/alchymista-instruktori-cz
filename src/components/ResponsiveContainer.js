import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './ResponsiveContainer.module.scss';

const ResponsiveContainer = ({children, narrow, className}) => (
    <div
        className={classnames(style.main, className, {
            [style.narrow]: narrow,
        })}
    >
        {children}
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
    narrow: PropTypes.bool,
    className: PropTypes.string,
};

ResponsiveContainer.defaultProps = {
    children: null,
    narrow: false,
    className: null,
};

export default ResponsiveContainer;
