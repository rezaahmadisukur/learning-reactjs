import { useContext } from "react";
import ListProducts from "../components/Elements/ListProducts.jsx";
import LayoutApp from "../components/layouts/LayoutApp.jsx";
import { Context } from "../Contexts/Context.jsx";
import Filters from "../components/Elements/Filters.jsx";
const ProductsPage = () => {
  const { products, search, checkbox, selectOpt } = useContext(Context);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category))
  ];

  // console.log(selectOpt);

  const filteredData = products.filter((item) => {
    const data =
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (checkbox.length === 0 || checkbox.includes(item.category));
    switch (selectOpt) {
      case "ascending":
        return data && products.sort((a, b) => a.title.localeCompare(b.title));
      case "descending":
        return data && products.sort((a, b) => b.title.localeCompare(a.title));
      case "highest-priced":
        return data && products.sort((a, b) => b.price - a.price);
      case "lowest-priced":
        return data && products.sort((a, b) => a.price - b.price);
      case "top-rated":
        return data && products.sort((a, b) => b.rating.rate - a.rating.rate);
      case "most-review":
        return data && products.sort((a, b) => b.rating.count - a.rating.count);
      default:
        return data && products.sort((a, b) => a.id - b.id);
    }
  });

  return (
    <LayoutApp>
      <div className="mt-10 max-w-full flex flex-col lg:flex-row gap-5 w-11/12 mx-auto">
        <div className="w-full lg:w-1/4">
          <Filters uniqueCategories={uniqueCategories} />
        </div>
        <div className="lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.length > 0 &&
            filteredData.map((item) => (
              <ListProducts key={item.id} product={item} />
            ))}
        </div>
      </div>
    </LayoutApp>
  );
};

export default ProductsPage;
