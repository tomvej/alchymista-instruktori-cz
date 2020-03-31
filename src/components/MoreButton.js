import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleDown, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import ScrollLink from './ScrollLink';

import style from './MoreButton.module.scss';

const MoreButton = ({to}) => (
    <ScrollLink to={to} className={classnames(style.main, 'fa-layers')} aria-label="Více">
        <FAIcon icon={faChevronDown} className={style.icon} />
        <FAIcon icon={faChevronCircleDown} className={style.background} />
    </ScrollLink>
);

MoreButton.propTypes = {
    to: PropTypes.string.isRequired,
};

export default MoreButton;
