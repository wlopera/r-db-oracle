import React from "react";

const Input = ({ fieldName, name, value, onValue, onClass }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {fieldName}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onValue(e.target.name, e.target.value)}
        className={`mt-1 p-2 border rounded ${onClass}`}
      />
    </div>
  );
};

export default Input;
