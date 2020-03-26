import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import ScrollLink from './ScrollLink';

import style from './SummaryTable.module.scss';

const SummaryTable = ({items, actionLink, actionText}) => (
    <div className={style.main}>
        <dl className={style.list}>
            {items.map(({label, value}) => (
                <div key={label} className={style.item}>
                    <div className={style.itemList}>
                        <dt className={style.label}>{label}</dt>
                        <dd className={style.content}>{value}</dd>
                    </div>
                </div>
            ))}
        </dl>
        <ScrollLink to={actionLink} className={style.action}>
            {actionText}
            <FAIcon icon={faArrowRight} className={style.icon} />
        </ScrollLink>
    </div>
);

SummaryTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired),
    actionLink: PropTypes.string.isRequired,
    actionText: PropTypes.string.isRequired,
};

SummaryTable.defaultProps = {
    items: [],
};

export default SummaryTable;
