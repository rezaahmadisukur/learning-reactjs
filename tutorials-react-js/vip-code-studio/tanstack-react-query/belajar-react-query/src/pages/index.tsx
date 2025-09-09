import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

export default function Home() {
  const query = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    }
  });
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5">
      {query.data?.map((product: Product) => (
        <div key={product.id} className="shadow p-4 flex flex-col items-center">
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
  );
}
