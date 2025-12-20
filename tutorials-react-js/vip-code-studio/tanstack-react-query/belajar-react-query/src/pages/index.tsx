import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

export default function Home() {
  const [showProduct, setShowProduct] = useState<string | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    }
  });

  const {
    data: detailProduct,
    isLoading: isLoadingDetailProduct,
    isError: isErrorDetailProduct,
    error: errorDetailProducts
  } = useQuery({
    queryKey: ["product", showProduct],
    queryFn: async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${showProduct}`
      );
      return res.json();
    },
    enabled: showProduct !== null
  });

  console.log(detailProduct);

  // if (isLoading) {
  //   return (
  //     <div className="grid place-content-center h-screen">
  //       <h1>Loading. . . </h1>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="grid place-content-center h-screen">
  //       <h1>
  //         Something went wrong, Error:{" "}
  //         <span className="text-red-600 italic font-bold">{error.message}</span>
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto p-8">
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="shadow p-4 bg-gray-500 flex flex-col items-center animate-pulse aspect-square"
              key={index}
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {data?.map((product: Product) => (
            <div
              key={product.id}
              className="shadow p-4 flex flex-col items-center"
              onClick={() => setShowProduct(product.id)}
            >
              <Image
                width={100}
                height={100}
                src={product.image}
                alt={product.title}
                className="scale-50 h-40 w-fit"
              />
              <h4 className="text-center font-bold text-lg line-clamp-1">
                {product.title}
              </h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
      <div
        className={`fixed h-screen w-screen bg-black/50 top-0 left-0 ${
          showProduct ? "flex justify-center items-center" : "hidden"
        }`}
      >
        <div className="w-1/2 h-1/2 bg-white relative flex items-center gap-8 p-8">
          <button
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowProduct(null)}
          >
            X
          </button>
          <Image
            width={200}
            height={200}
            src={detailProduct?.image}
            alt={detailProduct?.title}
            className="w-1/4"
          />
          <div>
            <h1 className="text-3xl">{detailProduct?.title}</h1>
            <p className="text-xl font-light">{detailProduct?.description}</p>
            <p className="font-light">$ {detailProduct?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
