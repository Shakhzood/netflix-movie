import React from 'react';
import './Button.css';

const Button = ({ onClick = () => {}, className = '', type = '', children = '' }) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;
