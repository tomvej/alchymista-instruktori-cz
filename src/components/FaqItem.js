import React from 'react';
import PropTypes from 'prop-types';

import {useFaqContext} from './FaqContainer';
import DropdownAnimation from './DropdownAnimation';

import style from './FaqItem.module.scss';

const FaqItem = ({title, children}) => {
    const [expanded, toggleExpanded] = useFaqContext(title);
    return (
        <>
            <dt className={style.title}>
                <button
                    type="button"
                    onClick={toggleExpanded}
                >
                    {title}
                </button>
            </dt>
            <DropdownAnimation visible={expanded}>
                <dd className={style.content}>{children}</dd>
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
