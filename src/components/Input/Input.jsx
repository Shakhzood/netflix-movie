import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  label = '',
  value = '',
  className = 'input-big',
  placeholder = '',
}) => {
  return (
    <React.Fragment>
      <label className="label">{label}</label> <br />
      <input className={className} type={type} placeholder={placeholder} value={value} />
    </React.Fragment>
  );
};

export default Input;
