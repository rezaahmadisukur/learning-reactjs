import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
    const { label, htmlFor, type, name, placeholder, id } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                id={id}
                ref={ref}
            />
        </div>
    );
});

export default InputForm;
