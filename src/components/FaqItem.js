import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {useFaqContext} from './FaqContainer';

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
            <dd className={classnames(style.content, {[style.visible]: expanded})}>{children}</dd>
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
