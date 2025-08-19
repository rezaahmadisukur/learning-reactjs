import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        price: "500.000",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae. Iure itaque
        quis reiciendis hic dicta minus corporis fugiat sed cum et.
        Eos dignissimos quaerat consequatur omnis voluptatem.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        price: "300.000",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae.`
    },
    {
        id: 3,
        name: "Sepatu Nike",
        image: "/images/shoes-1.jpg",
        price: "1.000.000",
        description: `Nike Sepatu Baru Terbaru 2023 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet exercitationem temporibus molestiae.`
    }
];

const email = localStorage.getItem("email");

const ProductPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
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
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    );
};

export default ProductPage;
