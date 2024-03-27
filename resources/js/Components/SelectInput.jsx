import React from "react";

const SelectInput = ({ id, name, value, onChange, children, required }) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 mb-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
            {children}
        </select>
    );
};

export default SelectInput;
