import React, { useState } from "react";
import TextField from "../../ui/TextField";

function AddNewCategory({ onAddNewCategory }) {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newCategory = {
      title,
      description,
      createdAt: new Date().toISOString(),
      id: Date.now(),
    };
    onAddNewCategory(newCategory);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2 className="text-secondary-400 mb-2" onClick={() => setShowCategoryForm(!showCategoryForm)}>
        Add New Category
      </h2>
      <form className={`p-4 bg-secondary-500 rounded-lg space-y-2 ${showCategoryForm ? "" : "hidden"}`} onSubmit={handleSubmit}>
        <TextField name="title" label="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField name="description" label="description" type="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="flex items-center justify-center w-full gap-x-3">
          <button
            className="flex-1 border border-secondary-0 rounded-xl p-2 text-secondary-0"
            onClick={(e) => {
              e.preventDefault();
              setShowCategoryForm(false);
            }}>
            Cancel
          </button>
          <button className="flex-1 border border-secondary-0 rounded-xl p-2 text-secondary-0 bg-secondary-700 ">Add Category</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCategory;
