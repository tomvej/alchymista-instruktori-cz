import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './DropdownAnimation.module.scss';

const DropdownAnimation = ({children, visible}) => {
    const [height, setHeight] = useState('default');
    const setDropdownRef = useCallback((el) => el && setHeight(el.scrollHeight), [setHeight]);
    return (
        <div
            ref={setDropdownRef}
            className={classnames(style.main, {[style.hidden]: !visible})}
            style={{maxHeight: visible ? height : 0}}
        >
            {children}
        </div>
    );
};

DropdownAnimation.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
};

DropdownAnimation.defaultProps = {
    children: null,
    visible: false,
};

export default DropdownAnimation;
