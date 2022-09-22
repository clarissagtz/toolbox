import React from 'react';
import './Button1.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button1 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>  {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

    const routeChange = ()  => {
        window.open("https://ucsd.edu","_blank");
    }
    return (<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={routeChange} type={type}>
        {children}
        </button>)
}