import React, { useState } from "react";
import TestData from "./TestData.json";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TestData;

  return (
    <div className="container">
      <h1 className="heading">Testimonial Component</h1>
    </div>
  );
}

export default Testimonial;
