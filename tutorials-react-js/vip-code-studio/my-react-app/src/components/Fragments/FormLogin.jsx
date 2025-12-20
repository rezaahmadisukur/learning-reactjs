import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = "/products";
            } else {
                setLoginFailed(res.response.data);
            }
        });
    };

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            {loginFailed ? (
                <p className="text-red-600 italic py-5">{loginFailed}</p>
            ) : null}
            <InputForm
                label="Username"
                htmlFor="username"
                type="text"
                name="username"
                id="username"
                placeholder="John Doe"
                ref={usernameRef}
            />
            <InputForm
                label="Password"
                htmlFor="password"
                type="password"
                name="password"
                id="password"
                placeholder="********"
            />
            <Button type="submit" variant="bg-blue-600 w-full cursor-pointer">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
