import React from "react";

function TextField({ label, name, type = "text", style }) {
  return (
    <div className={style}>
      <label htmlFor="name" className="mb-2 block text-secondary-400 text-lg">
        {label}
      </label>
      <input id={name} type={type} className="textField__input" autoComplete="off" />
    </div>
  );
}

export default TextField;
