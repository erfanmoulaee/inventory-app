import React, { useState } from "react";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";

function AddNewProduct({ category, onAddNewProduct }) {
  const [title, setTitle] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !quantity) return null;
    const newProduct = {
      title,
      quantity,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    onAddNewProduct(newProduct);
    setTitle("");
    setQuantity("");
  };
  return (
    <div>
      <h2 className="text-secondary-400 mb-2">Add New Product</h2>
      <form className="p-4 bg-secondary-500 rounded-lg space-y-2" onSubmit={handleSubmit}>
        <TextField name="title" label="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField name="quantity" label="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <SelectField name="title" label="title" options={category} />
        <button className="w-full border border-secondary-0 rounded-xl p-2 text-secondary-0 bg-secondary-700">Add New Product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
