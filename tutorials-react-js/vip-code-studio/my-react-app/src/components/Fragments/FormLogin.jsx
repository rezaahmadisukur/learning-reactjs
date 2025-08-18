import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
            />
            <InputForm
                label="Password"
                htmlFor="password"
                type="password"
                name="password"
                id="password"
                placeholder="********"
            />
            <Button variant="bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;
