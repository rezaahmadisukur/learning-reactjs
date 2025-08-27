import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { isDarkMode } = useContext(DarkMode);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <Navbar />
            <div
                className={`flex justify-center py-5 gap-4 ${
                    isDarkMode && "bg-slate-900"
                }`}
            >
                <div className="w-4/6 flex flex-wrap gap-5">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header
                                    image={product.image}
                                    id={product.id}
                                />
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 mx-4 py-3">
                        Cart
                    </h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    );
};

export default ProductPage;
