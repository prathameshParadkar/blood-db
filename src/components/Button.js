import React from 'react';
import "./Button.css";

const COLOUR = ['btn--red', 'btn--white'];
const TYPE = ['person', 'organisation'];

export const Button = ({children, type, onClick, buttonColour, buttonType}) => {
    const checkButtonColour = COLOUR.includes(buttonColour) ? buttonColour : COLOUR[0];
    return (
        <button 
            className={`btn ${checkButtonColour} ${buttonType}`}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}