import React, { FC } from 'react';
import './styles.scss';


type ButtonsType = {
    onClick?: () => void,
    children: string; 
    type?: "button" | "submit" | "reset" | undefined
}
const Button: FC<ButtonsType> = ({ children, ...otherProps }) => {
    return (
        <button className="btn" {...otherProps}>
            {children}
        </button>
    );
}

export default Button;