import { memo, useId, useState } from "react";
import "./App.css";

const Input = () => {
    const inputId = useId();
    return (
        <>
            <label htmlFor="">
                <span>Name: </span>
                <input type="text" id={`input-${inputId}`} />
            </label>
            <p>Name should contain at least firstname and lastname</p>
        </>
    );
};

const Todolist = memo((props) => {
    const { todos } = props;
    console.log("call todolist");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={`${todo}-${index}`}>{todo}</p>
            ))}
        </>
    );
});

const Counter = memo((props) => {
    const { count } = props;
    console.log("call counter");
    return (
        <>
            <p>Count: {count}</p>
        </>
    );
});

function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodo] = useState(["Conding", "Create Video"]);

    const increment = () => {
        setCount(count + 1);
    };

    const addTodo = (newTodos) => {
        setTodo([...todos, newTodos]);
    };
    return (
        <>
            <Todolist todos={todos} />
            <button onClick={() => addTodo("Playing Piano")}>Add Todo</button>
            <Counter count={count} />
            <button onClick={increment}>increment</button>
        </>
    );
}

export default App;
