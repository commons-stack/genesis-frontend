/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';

// Stateless UI Component
const FormField = ({ value, setValue, labelText }) => {
    return (
        <div className="field">
            <label className="label">{labelText}</label>
            <input className="input" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

FormField.propTypes = {
    fieldStyle: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
};

export default FormField;
