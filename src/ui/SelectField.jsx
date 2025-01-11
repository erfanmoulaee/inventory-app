import React from "react";

function SelectField({ label, name }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-400">
        {label}
      </label>
      <select className="textField__input">
        <option>test</option>
      </select>
    </div>
  );
}

export default SelectField;
