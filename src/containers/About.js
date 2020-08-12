import React from "react";
import apic from "./슬라이드2.JPG";

const About = () => {
  console.log("about");
  return (
    <div>
      <div className="container" align="center">
        <img src={apic} width="80%" alt="apic" />
      </div>
    </div>
  );
};

export default About;
