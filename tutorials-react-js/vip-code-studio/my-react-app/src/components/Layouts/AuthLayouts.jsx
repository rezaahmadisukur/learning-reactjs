import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
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
