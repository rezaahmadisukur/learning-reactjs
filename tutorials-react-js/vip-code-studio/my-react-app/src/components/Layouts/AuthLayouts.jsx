import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = ({ children, title, type }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    return (
        <div
            className={`flex justify-center items-center h-screen ${
                isDarkMode && "bg-slate-900"
            }`}
        >
            <div className="w-full max-w-xs">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
                >
                    {isDarkMode ? "Light" : "Dark"}
                </button>
                <h1 className="text-blue-600 text-3xl font-bold mb-2">
                    {title}
                </h1>
                <p className="font-medium text-slate-500">
                    Welcome, Please enter your details
                </p>
                {children}
                <p className="text-sm text-center mt-5">
                    {type === "login"
                        ? "Don't have an account ? "
                        : "Already have an account ? "}

                    {type === "login" && (
                        <Link
                            to="/register"
                            className="font-bold  text-blue-600 hover:underline"
                        >
                            Register
                        </Link>
                    )}
                    {type === "register" && (
                        <Link
                            to="/login"
                            className="font-bold  text-blue-600 hover:underline"
                        >
                            Login
                        </Link>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthLayouts;
