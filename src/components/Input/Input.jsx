import React from 'react';
import './Input.css';

const Input = ({
    type = 'text',
    label = '',
    value = '',
    stateValue = '',
    className = 'input-big',
    placeholder = '',
    onChange = () => {}
}) => {
    return (
        <React.Fragment>
            <label className="label">{label}</label> <br />
            <input onChange={onChange} className={className} type={type} placeholder={placeholder} value={stateValue} />
        </React.Fragment>
    );
};

export default Input;
