import { useState } from "react";

const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const [headingText, setHeadingText] = useState("Welcome To The \n Real World \n 😇");
  return (
    <>
      <h1 className="heading">Toggle Color App</h1>
    </>
  );
};

export default Main;
