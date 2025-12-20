import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
                label="Fullname"
                htmlFor="fullname"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="John Doe"
            />
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
            <InputForm
                label="Confirm Password"
                htmlFor="confirm-password"
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="********"
            />
            <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;
