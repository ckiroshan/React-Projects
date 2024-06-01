import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("#f0f0f0");

  const handleClick = (e) => {
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#f0f0f0");
    }
  };

  return (
    <>
      <section onClick={handleClick} className="container" style={{ backgroundColor: bgColor }}>
        {showInput ? (
          <input type="text" placeholder="Just a searchbar!" autoFocus onBlur={() => setShowInput(false)} />
        ) : (
          <div className="icon-text-wrapper">
            <span
              className="search-text"
              onClick={() => {
                setShowInput(true);
                setBgColor("#333");
              }}
            >
              Looking 💭 for something?
              <FaSearch className="search-icon" />
            </span>
          </div>
        )}
      </section>
    </>
  );
};

export default HiddenSearchBar;
