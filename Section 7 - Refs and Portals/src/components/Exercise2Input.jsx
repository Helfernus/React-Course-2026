import React from "react";

const Exercise2Input = React.forwardRef(({ label, ...props }, ref) => {
    return (
        <p className="control">
            <label>{label}</label>
            <input ref={ref} {...props} />
        </p>
    );
});

export default Exercise2Input;
