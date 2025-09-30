import { useContext, useEffect, useState } from "react";
import LayoutApp from "../components/layouts/LayoutApp";
import { Context } from "../Contexts/Context";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/slices/cartSlices";

const CartShoppingPage = () => {
  const { products, subTotal, cart, setSubTotal } = useContext(Context);
  const [total, setTotal] = useState(0);
  const discount = 0;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sumSubtotal = cart.reduce((acc, item) => {
  //       const product = products.find((prod) => prod.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setSubTotal(sumSubtotal);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products, setSubTotal]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sumSubtotal = cart.reduce((acc, item) => {
        const product = products.find((prod) => prod.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setSubTotal(sumSubtotal);
    }
  }, [cart, products, setSubTotal]);

  useEffect(() => {
    setTotal(subTotal - discount);
  }, [setTotal, subTotal]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <LayoutApp>
      <header className=" p-5 my-10">
        <h1 className="w-fit mx-auto font-bold text-5xl text-slate-800 italic">
          Cart Shopping
        </h1>
      </header>

      {/* Desktop */}
      <main className="hidden lg:flex justify-center gap-4 w-11/12 mx-auto my-10">
        {/* Desktop Table Cart */}
        <section className="w-3/4 ">
          <table cellPadding={10} cellSpacing={0} className="w-full">
            <thead className="text-xs text-slate-100 uppercase bg-gray-800">
              <tr className="text-center">
                <th className="rounded-s-lg"></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th className="rounded-e-lg">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((prod) => prod.id === item.id);
                  return (
                    <tr key={product.id}>
                      <td className="text-center">
                        <button
                          className="cursor-pointer"
                          onClick={() => handleDeleteItem(product.id)}
                        >
                          x
                        </button>
                      </td>
                      <td className="flex gap-3 items-center">
                        <div className="bg-slate-300 p-2 rounded">
                          <img
                            src={product.image}
                            alt={product.title}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-lg text-slate-800">
                            {product.title.substring(0, 30)}...
                          </p>
                          <p className="text-slate-600 text-sm font-semibold">
                            Category : {product.category}
                          </p>
                        </div>
                      </td>
                      <td className="text-center">
                        {product.price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 0
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-center">
                        {(product.price * item.qty).toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 0
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
        {/* Desktop Total Cart Checout */}
        <section className=" w-1/4 border border-slate-500  rounded p-3">
          <div className="p-3">
            <h1 className="text-lg font-bold text-slate-800">Order Summary</h1>
          </div>
          <hr className="border border-slate-300" />
          <div className="p-3 flex flex-col gap-2">
            <div className="flex justify-between items-cente ">
              <p className="text-slate-500">Items</p>
              <p className="font-bold">
                {cart.reduce((acc, cur) => acc + cur.qty, 0)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Sub Total</p>
              <p className="font-bold">
                {subTotal
                  ? subTotal.toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0
                    })
                  : (0).toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR"
                    })}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Shipping</p>
              <p className="font-bold">
                {(0).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR"
                })}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Taxes</p>
              <p className="font-bold">
                {(0).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR"
                })}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500">Coupon Discount</p>
              <p className="font-bold">
                {discount.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR"
                })}
              </p>
            </div>
          </div>
          <hr className="border border-slate-300" />
          <form className="p-3">
            <div className="flex justify-between items-center">
              <label htmlFor="total" className="text-slate-500">
                Total
              </label>
              <input
                type="text"
                id="total"
                name="total"
                readOnly
                value={total.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0
                })}
                className="font-bold text-right w-full"
              />
            </div>
            <button className="border w-full mt-5 rounded bg-slate-900 text-slate-100 py-2">
              Checkout
            </button>
          </form>
        </section>
      </main>

      {/* Mobile */}
      <main className="lg:hidden w-11/12 mx-auto flex flex-col gap-8 md:h-screen">
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <div key={product.id} className="flex gap-2 p-2">
                <div className="w-1/4 bg-slate-300 flex justify-center p-3 rounded shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-5 justify-between">
                      <h4 className="line-clamp-1 font-bold text-slate-900">
                        {product.title}
                      </h4>
                      <button
                        className="cursor-pointer"
                        onClick={() => dispatch(deleteItem(product.id))}
                      >
                        x
                      </button>
                    </div>
                    <p className="capitalize text-xs text-slate-500">
                      {product.category}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-lg text-slate-900">
                      {(product.price * item.qty).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 0
                      })}
                    </h4>
                    <p className="font-semibold text-slate-800">
                      Qty: {item.qty}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </main>

      {/* Mobile Total Cart Checkout */}
      <div className="lg:hidden  sticky bottom-0 bg-slate-50 py-5 px-5 shadow-t-xl">
        <div className="p-3">
          <h1 className="text-lg font-bold text-slate-800">Order Summary</h1>
        </div>
        <hr className="border border-slate-300" />
        <div className="p-3 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Items</p>
            <p className="font-bold">
              {cart.reduce((acc, cur) => acc + cur.qty, 0)}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Sub Total</p>
            <p className="font-bold">
              {subTotal
                ? subTotal.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 0
                  })
                : (0).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR"
                  })}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Shipping</p>
            <p className="font-bold">
              {(0).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Taxes</p>
            <p className="font-bold">
              {(0).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Coupon Discount</p>
            <p className="font-bold">
              {discount.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
              })}
            </p>
          </div>
        </div>
        <hr className="border border-slate-300" />
        <form className="flex flex-col justify-between items-center p-2">
          <div className=" w-full flex justify-between">
            <label htmlFor="total" className="text-slate-500">
              Total
            </label>
            <input
              type="text"
              id="total"
              name="total"
              readOnly
              value={
                total
                  ? total.toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0
                    })
                  : (0).toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR"
                    })
              }
              className="font-bold text-right"
            />
          </div>
          <button className="px-5 py-2 w-full bg-slate-900 text-slate-100 my-5 rounded cursor-pointer">
            Checkout
          </button>
        </form>
      </div>
    </LayoutApp>
  );
};

export default CartShoppingPage;
