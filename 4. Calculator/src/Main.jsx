import { useState } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    let answers = eval(inputValue);
    setInputValue(answers);
  }

  function clear() {
    setInputValue("");
  }

  return (
    <>
      <h1 className="heading">Calculator App</h1>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="clear btn-grey" onClick={() => clear()}>
          AC
        </span>
        <span onClick={() => display("%")} className="btn-grey">
          %
        </span>
        <span onClick={() => display("/")} className="btn-orange">
          /
        </span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("*")} className="btn-orange">
          X
        </span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("-")} className="btn-orange">
          -
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("+")} className="btn-orange">
          +
        </span>
        <span className="zero" onClick={() => display("0")}>
          0
        </span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={() => calculate()} className="btn-orange">
          =
        </span>
      </form>
    </>
  );
};

export default Main;
