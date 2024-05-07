import React from "react";
import style from "./HowItWork.module.scss";
const HowItWork = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`${style.howitworks} container`}>
          <div className="howitworks_heading">
            <div className="howitworks_heading__title">
              <p> How it works</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
