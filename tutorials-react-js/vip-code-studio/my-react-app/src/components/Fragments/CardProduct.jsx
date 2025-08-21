import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between ">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img
                src={image}
                alt="product"
                className="p-8 rounded-t-lg h-60 w-full object-cover"
            />
        </a>
    );
};

const Body = ({ children, name }) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name.substring(0, 20)}. . .
                </h5>
                <p className="text-sm text-white">
                    {children.substring(0, 200)}. . .
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                {price.toLocaleString("en-EN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0
                })}
            </span>
            <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
                {" "}
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
