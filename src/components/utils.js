/* eslint-disable import/prefer-default-export */
import React from 'react';
import classnames from 'classnames';

export const styled = (style, Tag) => ({className, ...props}) => (
    <Tag {...props} className={classnames(style, className)} />
);
