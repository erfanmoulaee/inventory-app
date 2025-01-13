import React from "react";

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-400">
        {label}
      </label>
      <select className="textField__input">
        {options.map((item) => {
          return (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectField;
