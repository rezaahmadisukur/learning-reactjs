import { useId } from "react";
import "./App.css";

const Input = () => {
    const inputId = useId();
    return (
        <>
            <label htmlFor="">
                <span>Name: </span>
                <input type="text" id={inputId} />
            </label>
            <p>Name should contain at least firstname and lastname</p>
        </>
    );
};

function App() {
    return (
        <>
            <Input />
            <Input />
        </>
    );
}

export default App;
