import React from "react";

function Button({ className, children, onClick, onSubmit, type }) {
    const handleClick = (children) => {
        if (type && type === "submit") {
            onSubmit();
        } else {
            onClick(children);
        }
    };
    return (
        <button className={className} onClick={() => handleClick(children)}>
            {children}
        </button>
    );
}

export default Button;
