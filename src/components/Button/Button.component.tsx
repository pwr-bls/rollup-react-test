import React from "react";
import "./Button.css"


type ButtonType = {
    onClick: () => void;
    title: string;
    isTag?: boolean;
};
const Button: React.FC<ButtonType> = ({title, onClick, isTag}) => {
    return <div className={isTag ? `button button-tag` : `button`} onClick={onClick}><span
        className="button-text">{title}</span></div>
};

export default Button;
