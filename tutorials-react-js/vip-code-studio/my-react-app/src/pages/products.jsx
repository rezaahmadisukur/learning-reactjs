import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5 gap-4">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet exercitationem temporibus molestiae. Iure itaque
                    quis reiciendis hic dicta minus corporis fugiat sed cum et.
                    Eos dignissimos quaerat consequatur omnis voluptatem.
                </CardProduct.Body>
                <CardProduct.Footer price="500.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet exercitationem temporibus molestiae. Iure itaque
                    quis reiciendis hic dicta minus corporis fugiat sed cum et.
                    Eos dignissimos quaerat consequatur omnis voluptatem.
                </CardProduct.Body>
                <CardProduct.Footer price="500.000" />
            </CardProduct>
        </div>
    );
};

export default ProductPage;
