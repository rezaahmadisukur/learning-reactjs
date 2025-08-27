import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    useEffect(() => {
        const sum = cart.reduce((acc, curItem) => {
            return acc + curItem.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    return (
        <div className="flex justify-end gap-5 h-20 bg-blue-600 text-white items-center px-10">
            {username}
            <Button variant="bg-black cursor-pointer" onClick={handleLogout}>
                Logout
            </Button>
            <div className="flex justify-center items-center bg-gray-800 w-8 h-8 p-2 rounded-full">
                {totalCart}
            </div>
            <div className="rounded bg-white text-blue-600 p-2">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-1`}
                >
                    {isDarkMode ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
