import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {useFaqContext} from './FaqContainer';
import DropdownAnimation from './DropdownAnimation';

import style from './FaqItem.module.scss';

const FaqItem = ({title, children}) => {
    const [expanded, toggleExpanded] = useFaqContext(title);
    return (
        <>
            <dt className={classnames(style.title, {[style.expanded]: expanded})}>
                <button
                    type="button"
                    onClick={toggleExpanded}
                    className={style.toggler}
                >
                    {title}
                    <FAIcon icon={faAngleDown} className={style.icon} />
                </button>
            </dt>
            <DropdownAnimation
                visible={expanded}
                tag="dd"
                className={style.content}
            >
                {children}
            </DropdownAnimation>
        </>
    );
};

FaqItem.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
};

FaqItem.defaultProps = {
    children: null,
};

export default FaqItem;
