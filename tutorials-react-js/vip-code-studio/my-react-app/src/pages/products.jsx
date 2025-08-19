import React, { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: "1",
        name: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        price: 500000,
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae. Iure itaque
        quis reiciendis hic dicta minus corporis fugiat sed cum et.
        Eos dignissimos quaerat consequatur omnis voluptatem.`
    },
    {
        id: "2",
        name: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        price: 300000,
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae.`
    },
    {
        id: "3",
        name: "Sepatu Nike",
        image: "/images/shoes-1.jpg",
        price: 1000000,
        description: `Nike Sepatu Baru Terbaru 2023 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae.`
    }
];

const email = localStorage.getItem("email");

const ProductPage = () => {
    const [cart, setCart] = useState([
        {
            id: "1",
            qty: 1
        }
    ]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { id: id, qty: 1 }]);
        }
    };

    return (
        <>
            <div className="flex justify-end gap-4 h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button
                    variant="bg-black cursor-pointer"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5 gap-4">
                <div className="w-4/6 flex flex-wrap gap-5">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 mx-4 py-3">
                        Cart
                    </h1>
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
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            {product.price.toLocaleString(
                                                "id-ID",
                                                {
                                                    style: "currency",
                                                    currency: "IDR",
                                                    minimumFractionDigits: 0
                                                }
                                            )}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            {(
                                                product.price * item.qty
                                            ).toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                                minimumFractionDigits: 0
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
