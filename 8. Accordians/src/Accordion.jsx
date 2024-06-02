import { useState, useRef, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isActive]);

  return (
    <section className={`accordion-card ${isActive ? "active" : ""}`}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div ref={contentRef} className="content">
        <p className="card-info">{content}</p>
      </div>
    </section>
  );
};

export default Accordion;
