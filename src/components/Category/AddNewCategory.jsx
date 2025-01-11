import React from "react";
import TextField from "../../ui/TextField";

function AddNewCategory() {
  return (
    <div>
      <h2 className="text-secondary-400 mb-2">Add New Category</h2>
      <form className="p-4 bg-secondary-500 rounded-lg space-y-2">
        <TextField name="title" label="title" />
        <TextField name="description" label="description" type="description" />
        <div className="flex items-center justify-center w-full gap-x-3">
          <button className="flex-1 border border-secondary-0 rounded-xl p-2 text-secondary-0  ">Cancel</button>
          <button className="flex-1 border border-secondary-0 rounded-xl p-2 text-secondary-0 bg-secondary-700 ">Add Category</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCategory;
