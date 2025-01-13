import { useEffect, useState } from "react";
import "./App.css";
import AddNewCategory from "./components/Category/AddNewCategory";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import AddNewProduct from "./components/Products/AddNewProduct";

function App() {
  const [categories, setCategories] = useState([]);
  const [productsList, setProductList] = useState([]);
  const [filteredOnProduct, setFilterOnProduct] = useState([]);
  const [searchProducts, setSearchProduct] = useState("");
  const [sortProducts, setSortProduct] = useState("latest");

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const storedProductsList = JSON.parse(localStorage.getItem("productsList")) || [];

    setCategories(storedCategories);

    setProductList(storedProductsList);
  }, []);

  useEffect(() => {
    let result = productsList;
    result = filterSearch(result);
    result = filterSort(result);
    setFilterOnProduct(result);
  }, [productsList, searchProducts, sortProducts]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (productsList.length) {
      localStorage.setItem("productsList", JSON.stringify(productsList));
    }
  }, [productsList]);

  const sortHandler = (e) => {
    setSortProduct(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchProduct(e.target.value.trim().toLowerCase());
  };

  const filterSort = (arr) => {
    return [...arr].sort((a, b) => {
      if (sortProducts === "latest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortProducts === "earliest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  };

  const filterSearch = (arr) => {
    return arr.filter((item) => item.title.toLowerCase().includes(searchProducts));
  };

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
          <Filter categories={categories} searchProducts={searchProducts} sortProducts={sortProducts} onSort={sortHandler} onSearch={searchHandler} />
          <ProductList productsList={filteredOnProduct} categories={categories} setProductList={setProductList} />
        </div>
      </div>
    </div>
  );
}

export default App;
