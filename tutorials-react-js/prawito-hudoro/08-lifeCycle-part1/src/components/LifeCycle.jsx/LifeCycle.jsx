import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setCount(2);
        }, 5000);
    }, []);
    const handleCount = () => {
        setCount(count + 1);
    };
    return (
        <button onClick={() => handleCount()}>
            LifeCycle function: {count}
        </button>
    );
};

export default LifeCycle;
