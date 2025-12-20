import { useContext } from "react";
import { Context } from "../../Contexts/Context";

const Filters = (props) => {
  const { uniqueCategories } = props;
  const { search, setSearch, checkbox, setCheckbox, selectOpt, setSelectOpt } =
    useContext(Context);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      console.log("checkbox", [...checkbox, value]);
      setCheckbox([...checkbox, value]);
    } else {
      console.log(
        "Not checked",
        checkbox.filter((category) => category !== value)
      );
      setCheckbox(checkbox.filter((category) => category !== value));
    }
  };

  // console.log("unique : ", uniqueCategories.sort());

  const handleSortChange = (e) => {
    setSelectOpt(e.target.value);
  };

  return (
    <div className="border p-5 shadow rounded-2xl border-slate-300">
      <h1 className="text-3xl text-slate-800 font-bold">Filter Product</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 mt-4">
          <label
            htmlFor="search"
            className="text-lg font-semibold italic text-slate-900"
          >
            Searching
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Find product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border h-10 px-3 rounded text-slate-800"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-semibold italic block my-3 text-slate-900">
            Category
          </h1>
          <div>
            {/* <label htmlFor="men's clothing" className="flex items-center gap-5">
              <input
                type="checkbox"
                id="men's clothing"
                value="men's clothing"
                onChange={handleCheckboxChange}
              />
              <span className="capitalize">men's clothing</span>
            </label>
            <label htmlFor="jewelery" className="flex items-center gap-5">
              <input
                type="checkbox"
                id="jewelery"
                value="jewelery"
                onChange={handleCheckboxChange}
              />
              <span className="capitalize">jewelery</span>
            </label>
            <label htmlFor="electronics" className="flex items-center gap-5">
              <input
                type="checkbox"
                id="electronics"
                value="electronics"
                onChange={handleCheckboxChange}
              />
              <span className="capitalize">electronics</span>
            </label>
            <label
              htmlFor="women's clothing"
              className="flex items-center gap-5"
            >
              <input
                type="checkbox"
                id="women's clothing"
                value="women's clothing"
                onChange={handleCheckboxChange}
              />
              <span className="capitalize">women's clothing</span>
            </label> */}
            {uniqueCategories.length > 0 &&
              uniqueCategories.sort().map((item, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={item}
                    className="flex items-center gap-5"
                  >
                    <input
                      type="checkbox"
                      id={item}
                      value={item}
                      onChange={handleCheckboxChange}
                    />
                    <span className="capitalize">{item}</span>
                  </label>
                );
              })}
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="sort"
            className="text-lg font-semibold italic block my-3 text-slate-900"
          >
            Sort By
          </label>
          <select
            name="sort"
            id="sort"
            className="w-full border h-10 rounded text-slate-800"
            value={selectOpt}
            onChange={handleSortChange}
          >
            <option defaultValue>Select Sort By</option>
            <option value="ascending">A-Z Selections</option>
            <option value="descending">Z-A Selections</option>
            <option value="highest-priced">Highest Priced</option>
            <option value="lowest-priced">Lowest Priced</option>
            <option value="top-rated">Top Rated</option>
            <option value="most-review">Most Review</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
