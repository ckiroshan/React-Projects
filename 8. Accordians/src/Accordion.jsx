import { useState, useRef, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  return (
    <section className={`accordion-card ${isActive ? "active" : ""}`}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        <p className="card-info"></p>
      </div>
    </section>
  );
};

export default Accordion;
