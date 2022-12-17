import React from 'react';
import './Input.css';

const Input = ({
    type = 'text',
    label = '',
    value = '',
    name = '',
    stateValue = '',
    className = 'input-big',
    placeholder = '',
    onChange = () => { },
    onBlur,
}) => {
    return (
        <React.Fragment>
            <label className="label">{label}</label> <br />
            <input onBlur={onBlur} onChange={onChange} name={name} className={className} type={type} placeholder={placeholder} value={stateValue} />
        </React.Fragment>
    );
};

export default Input;
