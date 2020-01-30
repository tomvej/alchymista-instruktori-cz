/* eslint-disable import/prefer-default-export */
import React from 'react';

export const styled = (style, Tag) => (props) => (
    <Tag {...props} className={style} />
);
