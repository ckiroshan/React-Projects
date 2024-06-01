import React, { useState } from "react";
import TestData from "./TestData.json";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TestData;

  return (
    <div className="container">
      <h1 className="heading">Testimonial Component</h1>
      <div className="testimonials">
        <div key={currentIndex} className="testimonials-content">
          <div className="testimonials-quote">" {testimonials[currentIndex].quote} "</div>
          <div className="testimonials-author">- {testimonials[currentIndex].author} -</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
