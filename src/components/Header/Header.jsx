import React from "react";

function Header({ productsList }) {
  return (
    <div className="flex justify-center items-center bg-secondary-500 p-2 text-lg font-bold">
      <h2 className="text-secondary-0 text-sm md:text-lg">Inventory App using tailwind & React.js</h2>
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary-700 ml-2 text-secondary-0">{productsList.length}</span>
    </div>
  );
}

export default Header;
