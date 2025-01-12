import React from "react";

function TextField({ label, name, type = "text", onChange, value }) {
  return (
    <div>
      <label htmlFor="name" className="mb-2 block text-secondary-400 text-lg">
        {label}
      </label>
      <input id={name} type={type} className="textField__input" onChange={onChange} value={value} />
    </div>
  );
}

export default TextField;
