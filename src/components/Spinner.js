import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch as icon} from '@fortawesome/free-solid-svg-icons';

import style from './Spinner.module.scss';

export default () => <FontAwesomeIcon icon={icon} className={style.main} />;
