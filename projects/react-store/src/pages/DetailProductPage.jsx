import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/service";
import LayoutApp from "../components/layouts/LayoutApp";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlices";
import { Context } from "../Contexts/Context";

const DetailProductPage = () => {
  const { cart } = useContext(Context);
  const [product, setProduct] = useState({});
  const [countQty, setCountQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSubmit = (e, prodId) => {
    e.preventDefault();
    const quantity = parseInt(e.target.qty.value);
    dispatch(addToCart({ id: prodId, qty: quantity }));
  };
  return (
    <LayoutApp>
      {Object.keys(product).length > 0 && (
        <div className="w-full flex flex-col lg:flex-row items-center gap-5 lg:px-5 lg:mt-10">
          <div className="w-full lg:w-1/3 max-w-full bg-slate-200 rounded flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="scale-90 w-fit h-100"
            />
          </div>
          <div className="m-5 lg:w-2/3">
            <div className="flex flex-col gap-3">
              <p className="capitalize bg-black text-white px-3 py-1 w-fit text-[10px] rounded-full">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold text-slate-900">
                {product.title}
              </h1>
              <p>
                ⭐⭐⭐⭐⭐ {product.rating.rate} ({product.rating.count} Review)
              </p>
              <h2 className="text-3xl font-semibold">
                {product.price.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0
                })}
              </h2>
              <p className="text-lg font-light">{product.description}</p>
              <form onSubmit={(e) => handleSubmit(e, product.id)}>
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    className="w-8 h-8 border rounded text-slate-50 bg-slate-800 cursor-pointer hover:bg-slate-900 transition-all"
                    onClick={() => {
                      if (countQty === 1) {
                        setCountQty(1);
                      } else {
                        setCountQty(countQty - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="qty"
                    name="qty"
                    className="w-10 h-7 rounded text-center"
                    onChange={(e) => setCountQty(parseInt(e.target.value))}
                    value={parseInt(countQty)}
                  />
                  <button
                    type="button"
                    className="w-8 h-8 border rounded text-slate-50 bg-slate-800 cursor-pointer hover:bg-slate-900 transition-all"
                    onClick={() => setCountQty(countQty + 1)}
                  >
                    +
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-1 bg-slate-800 text-slate-100 rounded cursor-pointer hover:bg-slate-900 transition-all"
                  >
                    Add To Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </LayoutApp>
  );
};

export default DetailProductPage;
