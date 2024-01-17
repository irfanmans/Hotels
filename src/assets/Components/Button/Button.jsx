import React from "react";

export default function Button({ children, className, type, onClick }) {
    return (
        <>
            <button className={className} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    );
}
