import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-sm text-center mt-5">
                Have an account ?{" "}
                <Link
                    to="/login"
                    className="font-bold  text-blue-600 hover:underline"
                >
                    Login
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;
