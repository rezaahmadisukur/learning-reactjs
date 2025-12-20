import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    // const [showComponent, setShowComponent] = useState(true);
    const [count, setCount] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setCount(2);
        }, 5000);
        // setTimeout(() => {
        //     setShowComponent(false);
        // }, 15000);
    }, []);

    const changeCount = () => {
        setCount(count + 1);
    };

    // if (!showComponent) return null;
    return (
        <button onClick={() => changeCount()}>
            LifeCycle function: {count}
        </button>
    );
};

export default LifeCycle;
