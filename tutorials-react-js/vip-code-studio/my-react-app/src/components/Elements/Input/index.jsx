import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { label, htmlFor, type, name, placeholder, id } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} id={id} />
        </div>
    );
};

export default InputForm;
