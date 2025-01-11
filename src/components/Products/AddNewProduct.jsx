import React from "react";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";

function AddNewProduct() {
  return (
    <div>
      <h2 className="text-secondary-400 mb-2">Add New Product</h2>
      <form className="p-4 bg-secondary-500 rounded-lg space-y-2">
        <TextField name="title" label="title" />
        <TextField name="quantity" label="quantity" type="number" />
        <SelectField name="title" label="title" />
        <button className="w-full border border-secondary-0 rounded-xl p-2 text-secondary-0 bg-secondary-700">Add New Product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
