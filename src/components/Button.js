import React from 'react';
import "./Button.css";

const COLOUR = ['btn--red', 'btn--white'];

export const Button = ({children, type, onClick, buttonColour}) => {
    const checkButtonColour = COLOUR.includes(buttonColour) ? buttonColour : COLOUR[0];
    return (
        <button 
            className={`btn ${checkButtonColour}`}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}