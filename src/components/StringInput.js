import React from 'react';
import PropTypes from 'prop-types';
import {noop} from '../utils';

const StringInput = ({value, onChange, onBlur, onFocus, placeholder}) => (
    <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
    />
);

StringInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
};

StringInput.defaultProps = {
    onFocus: noop,
    onBlur: noop,
    placeholder: '',
};

export default StringInput;
