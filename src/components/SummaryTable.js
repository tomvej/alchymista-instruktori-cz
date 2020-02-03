import React from 'react';
import PropTypes from 'prop-types';

import ScrollLink from './ScrollLink';

import style from './SummaryTable.module.scss';

const SummaryTable = ({items}) => (
    <dl className={style.main}>
        {Object.entries(items).map(([label, content]) => (
            <div className={style.itemWrapper} key={label}>
                <div className={style.item}>
                    <dt className={style.label}>{label}</dt>
                    <dd className={style.content}>{content}</dd>
                </div>
            </div>
        ))}
        {/* FIXME */}
        <ScrollLink to="about" className={style.action}>Přihlásit se</ScrollLink>
    </dl>
);

SummaryTable.propTypes = {
    items: PropTypes.objectOf(PropTypes.string.isRequired),
};

SummaryTable.defaultProps = {
    items: {},
};

export default SummaryTable;
