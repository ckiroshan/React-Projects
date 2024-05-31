import { useState } from "react";

const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const [headingText, setHeadingText] = useState("Welcome To The \n Real World \n 😇");

  function handleClick() {
    const isLightMode = backgroundColor === "white";
    setBackgroundColor(isLightMode ? "#1b1b1b" : "white");
    setTextColor(isLightMode ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(isLightMode ? "#1b1b1b" : "white");
    setHeadingText(isLightMode ? "Welcome To The \n Dark Side \n 🧛‍♂️" : "Welcome To The \n Real World \n 😇");
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button onClick={handleClick} style={{ buttonStyle, color: textColor, border: `5px solid ${textColor}` }}>
          {backgroundColor === "#1b1b1b" ? "Dark Mode" : "Light Mode"}
        </button>
        <section>
          <h1 className="heading">
            {headingText.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index !== headingText.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
        </section>
      </section>
    </>
  );
};

export default Main;
