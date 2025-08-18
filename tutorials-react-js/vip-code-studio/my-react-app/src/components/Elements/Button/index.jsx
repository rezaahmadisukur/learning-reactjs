import React from "react";
const Button = ({ variant = "bg-black", children = "..." }) => {
    return (
        <button
            type="submit"
            className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`}
        >
            {children}
        </button>
    );
};

export default Button;
