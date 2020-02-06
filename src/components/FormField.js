import React from 'react';
import PropTypes from 'prop-types';
import {useField} from 'react-final-form';
import {composeValidations} from '../utils';

const FormField = ({name, label, placeholder, component: Component, validate}) => {
    const {input, meta: {touched, error}} = useField(name, {validate: composeValidations(validate)});

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <Component {...input} placeholder={placeholder} />
            {error && touched && <div>{error}</div>}
        </div>
    );
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    component: PropTypes.func.isRequired,
    validate: PropTypes.arrayOf(PropTypes.func.isRequired),
    placeholder: PropTypes.string,
};

FormField.defaultProps = {
    label: null,
    validate: [],
    placeholder: '',
};

export default FormField;
