import React from 'react';
import './Button.css';
const Button = ({ className = '', type = '', children = '' }) => {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;
