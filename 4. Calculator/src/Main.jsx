import { useState } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1 className="heading">Calculator App</h1>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
      </form>
    </>
  );
};

export default Main;
