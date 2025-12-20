import { Link } from "react-router-dom";

const ListProducts = (props) => {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex justify-center items-center rounded bg-slate-200 relative">
        <img
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="scale-90 h-40 w-fit"
        />
        <span className="absolute bottom-3 left-3 bg-slate-800 text-slate-100 rounded-full py-1 px-3 text-[10px] border border-slate-100">
          {product.category}
        </span>
      </div>
      <div className="my-3 mx-1">
        <h5 className="line-clamp-1 text-slate-800 font-semibold">
          {product.title}
        </h5>
        <div className="flex justify-between items-center my-2">
          <span className="text-xs text-slate-500">
            ⭐ {product.rating.rate} ({product.rating.count} Review)
          </span>
          <h4 className="font-semibold">
            {product.price.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0
            })}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ListProducts;
