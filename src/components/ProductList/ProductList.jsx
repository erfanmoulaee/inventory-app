import React from "react";

function ProductList({ productsList, categories, setProductList }) {
  const findCategoryTitle = (categoryId) => {
    return categories.find((item) => parseInt(item.id) === parseInt(categoryId)).title;
  };
  const deleteHandler = (id) => {
    const filteredProductList = productsList.filter((product) => product.id !== parseInt(id));
    setProductList(filteredProductList);
  };
  return (
    <div>
      <h3 className="text-secondary-400 border-b-[1px] border-secondary-400 mb-6">ProductList</h3>
      {productsList.map((item) => {
        return (
          <div key={item.id} className="flex items-center justify-between p-2 overflow-x-auto">
            <div>
              <span className="text-secondary-400">{item.title}</span>
            </div>
            <div className="flex items-center gap-x-2 text-secondary-400 cursor-pointer">
              <span>{new Date(item.createdAt).toLocaleDateString("fa-IR")}</span>
              <span className="text-secondary-400 border border-secondary-500 rounded-2xl px-3 py-1/2">{findCategoryTitle(item.categoryId)}</span>
              <span className="w-7 h-7 rounded-full bg-secondary-500 flex items-center justify-center text-secondary-700 border border-secondary-200">{item.quantity}</span>
              <button className="text-red-500 border border-red-500 rounded-2xl px-3 py-1/2" onClick={() => deleteHandler(item.id)}>
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
