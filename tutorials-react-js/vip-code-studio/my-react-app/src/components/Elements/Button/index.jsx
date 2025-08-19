import React from "react";
const Button = ({
    variant = "bg-black",
    children = "...",
    onClick = () => {},
    type = "button"
}) => {
    return (
        <button
            type={type}
            className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
