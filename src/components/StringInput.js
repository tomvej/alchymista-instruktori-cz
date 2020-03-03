import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {noop} from '../utils';

import inputStyle from './StringInput.module.scss';

const StringInput = ({name, value, onChange, onBlur, onFocus, placeholder, invalid, area, disabled}) => {
    const Tag = area ? 'textarea' : 'input';
    return (
        <Tag
            className={classnames(inputStyle.main, {
                [inputStyle.invalid]: invalid,
                [inputStyle.area]: area,
            })}
            type="text"
            id={name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

StringInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    area: PropTypes.bool,
    disabled: PropTypes.bool,
};

StringInput.defaultProps = {
    onFocus: noop,
    onBlur: noop,
    placeholder: '',
    invalid: false,
    area: false,
    disabled: false,
};

export default StringInput;
