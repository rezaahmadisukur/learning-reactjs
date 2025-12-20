import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
    useTotalPrice,
    useTotalPriceDispatch
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(
                    (product) => product.id === item.id
                );
                return acc + product.price * item.qty;
            }, 0);
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum
                }
            });
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 &&
                    cart.map((item) => {
                        const product = products.find(
                            (product) => product.id === item.id
                        );
                        return (
                            <tr key={item.id}>
                                <td>{product.title.substring(0, 10)}. . .</td>
                                <td>
                                    {product.price.toLocaleString("en-EN", {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0
                                    })}
                                </td>
                                <td>{item.qty}</td>
                                <td>
                                    {(product.price * item.qty).toLocaleString(
                                        "en-EN",
                                        {
                                            style: "currency",
                                            currency: "USD",
                                            minimumFractionDigits: 0
                                        }
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                <tr ref={totalPriceRef}>
                    <td colSpan={3}>Price</td>
                    <td>
                        {total.toLocaleString("en-EN", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0
                        })}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableCart;
