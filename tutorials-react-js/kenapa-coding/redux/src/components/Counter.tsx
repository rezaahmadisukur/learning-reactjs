import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount
} from "../slices/counterSlice";
import { type AppDispath, type RootState } from "../store";

const Counter = () => {
  const dispatch = useDispatch<AppDispath>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
