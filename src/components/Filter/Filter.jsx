function Filter({ categories, searchProducts, sortProducts, onSort, onSearch }) {
  return (
    <div>
      <h3 className="text-secondary-400 border-b-[1px] border-secondary-400 mb-6">Filter</h3>
      <div className="flex items-center justify-between">
        <label htmlFor="search" className="text-secondary-400 text-lg">
          search
        </label>
        <input type="text" className="textField__input w-1/3 py-2" value={searchProducts} onChange={onSearch} />
      </div>
      <div className="flex items-center justify-between mt-6">
        <label htmlFor="sort" className="text-secondary-400 text-lg">
          sort
        </label>
        <select name="sort" id="sort" value={sortProducts} className="textField__input w-1/4 py-2" onChange={onSort}>
          <option value="latest">latest</option>
          <option value="earliest">earliest</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-6">
        <label htmlFor="sort" className="text-secondary-400 text-lg">
          sort
        </label>
        <select name="" id="" className="textField__input w-1/6 py-2">
          <option value="" disabled>
            ALL
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
    </div>
  );
}

export default Filter;
