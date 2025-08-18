import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-sm text-center mt-5">
                Don't have an account ?{" "}
                <Link
                    to="/register"
                    className="font-bold  text-blue-600 hover:underline"
                >
                    Register
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;
