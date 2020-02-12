import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import ScrollLink from './ScrollLink';

import style from './SummaryTable.module.scss';

const SummaryTable = ({items, actionLink, actionText}) => (
    <dl className={style.main}>
        {Object.entries(items).map(([label, content]) => (
            <div className={style.itemWrapper} key={label}>
                <div className={style.item}>
                    <dt className={style.label}>{label}</dt>
                    <dd className={style.content}>{content}</dd>
                </div>
            </div>
        ))}
        <ScrollLink to={actionLink} className={style.action}>{actionText} <FAIcon icon={faArrowRight} className={style.icon} /></ScrollLink>
    </dl>
);

SummaryTable.propTypes = {
    items: PropTypes.objectOf(PropTypes.string.isRequired),
    actionLink: PropTypes.string.isRequired,
    actionText: PropTypes.string.isRequired,
};

SummaryTable.defaultProps = {
    items: {},
};

export default SummaryTable;
