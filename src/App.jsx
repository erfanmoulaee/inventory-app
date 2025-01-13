import { useState } from "react";
import "./App.css";
import AddNewCategory from "./components/Category/AddNewCategory";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import AddNewProduct from "./components/Products/AddNewProduct";

function App() {
  const [categories, setCategories] = useState([]);
  const [productsList, setProductList] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProductList((prevProduct) => [...prevProduct, newProduct]);
  };

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategory) => [...prevCategory, newCategory]);
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 row-span-2 gap-4 container h-screen mt-6">
        <div className="col-span-12 md:col-span-6 space-y-8">
          <AddNewCategory onAddNewCategory={handleAddCategory} />
          <AddNewProduct categories={categories} onAddNewProduct={handleAddProduct} />
        </div>
        <div className="col-span-12 md:col-span-6 space-y-8">
          <Filter />
          <ProductList productsList={productsList} />
        </div>
      </div>
    </div>
  );
}

export default App;
