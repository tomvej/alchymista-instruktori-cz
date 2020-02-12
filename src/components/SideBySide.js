import React from 'react';
import PropTypes from 'prop-types';

import style from './SideBySide.module.scss';

const SideBySide = ({left, right}) => (
    <div className={style.main}>
        <div className={style.column}>{left}</div>
        <div className={style.column}>{right}</div>
    </div>
);

SideBySide.propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
};

export default SideBySide;
