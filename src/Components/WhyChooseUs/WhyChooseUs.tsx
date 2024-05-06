import React from "react";
import style from "./WhyChooseUs.module.scss";
const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={`${style.WhyChooseUs} heading`}>
            <div className="WhyChooseUs_heading_head">Why choose us?</div>
            <div className="WhyChooseUs_heading_para">
              A large part of our role is choosing which particular coffees will
              be featured in our range.This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
