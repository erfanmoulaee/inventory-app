import React, { useState } from "react";
import TextField from "../../ui/TextField";

function AddNewProduct({ categories, onAddNewProduct }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !quantity || !categoryId) return null;
    const newProduct = {
      title,
      quantity: parseInt(quantity, 10),
      categoryId,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    onAddNewProduct(newProduct);
    setTitle("");
    setQuantity("");
    setCategoryId("");
  };
  return (
    <div>
      <h2 className="text-secondary-400 mb-2">Add New Product</h2>
      <form className="p-4 bg-secondary-500 rounded-lg space-y-2" onSubmit={handleSubmit}>
        <TextField name="title" label="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField name="quantity" label="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <div>
          <label htmlFor="category" className="mb-2 block text-secondary-400">
            category
          </label>
          <select
            className="textField__input"
            name="categoryId"
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
            value={categoryId}>
            <option value="" disabled>
              select a category
            </option>
            {categories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
        <button className="w-full border border-secondary-0 rounded-xl p-2 text-secondary-0 bg-secondary-700">Add New Product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
