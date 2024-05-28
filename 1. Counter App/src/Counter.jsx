import { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(0);

  const increment = () => SetCount(count + 1);
  const decrement = () => SetCount(count - 1);
  const reset = () => SetCount(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
      <section className="btn-container">
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
        <button onClick={decrement} className="btn">
          -
        </button>
      </section>
    </>
  );
};

export default Counter;
