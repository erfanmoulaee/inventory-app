import React from "react";
import TextField from "../../ui/TextField";

function Filter() {
  return (
    <div>
      <h3 className="text-secondary-400 border-b-[1px] border-secondary-400 mb-6">Filter</h3>
      <div className="flex items-center justify-between">
        <label htmlFor="search" className="text-secondary-400 text-lg">
          search
        </label>
        <input type="text" className="textField__input w-1/3 py-2" />
      </div>
      <div className="flex items-center justify-between mt-6">
        <label htmlFor="sort" className="text-secondary-400 text-lg">
          sort
        </label>
        <select name="" id="" className="textField__input w-1/4 py-2">
          <option value="latest">latest</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-6">
        <label htmlFor="sort" className="text-secondary-400 text-lg">
          sort
        </label>
        <select name="" id="" className="textField__input w-1/6 py-2">
          <option value="All">ALL</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
