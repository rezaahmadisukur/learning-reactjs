import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products";
    };

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                ref={emailRef}
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
