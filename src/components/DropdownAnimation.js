import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './DropdownAnimation.module.scss';

const DropdownAnimation = ({children, visible, tag: Tag, className}) => {
    const [height, setHeight] = useState('default');
    const setDropdownRef = useCallback((el) => el && setHeight(el.scrollHeight), [setHeight]);
    return (
        <Tag
            ref={setDropdownRef}
            className={classnames(style.main, className, {[style.hidden]: !visible})}
            style={{maxHeight: visible ? height : 0}}
        >
            {children}
        </Tag>
    );
};

DropdownAnimation.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
    tag: PropTypes.string,
    className: PropTypes.string,
};

DropdownAnimation.defaultProps = {
    children: null,
    visible: false,
    tag: 'div',
    className: null,
};

export default DropdownAnimation;
