import React from "react";

function CircleContainer({ value, valueClass }) {
    return (
        <div className="container-circle">
            <span className={valueClass}>{value}</span>
        </div>
    );
}

export default CircleContainer;
