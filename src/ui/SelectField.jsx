import React from "react";

function SelectField({ label, name, options, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-400">
        {label}
      </label>
      <select className="textField__input" name={name} onChange={onChange}>
        {options.map((item) => {
          return <option key={item.id}>{item.title}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectField;
