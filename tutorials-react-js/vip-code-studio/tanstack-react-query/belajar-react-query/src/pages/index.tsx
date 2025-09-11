import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    }
  });

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
    </div>
  );
}
