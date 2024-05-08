import React from "react";
import style from "./HowItWork.module.scss";
import Button from "../Button";
const HowItWork = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`${style.howitworks} container`}>
          <div className="howitworks_heading">
            <div className="howitworks_heading__title">
              <h2> How it works</h2>
            </div>
          </div>
          <div className="howitworks_section">
            <div className="howitworks_section_steps">
              <div className="howitworks_section_steps__ellipse"></div>
              <hr className="howitworks_section_steps__line" />
            </div>
            <div className="howitworks_section_steps">
              <div className="howitworks_section_steps__ellipse"></div>
              <hr className="howitworks_section_steps__line" />
            </div>
            <div className="howitworks_section_steps">
              <div className="howitworks_section_steps__ellipse"></div>
              {/* <hr className="howitworks_section_steps__line" /> */}
            </div>
          </div>
          <div className="howitworks_plans">
            <div className="howitworks_plans__card">
              <div className="howitworks_plans__card_title">
                <h2>01</h2>
              </div>
              <div className="howitworks_plans__card_header">
                <h3> Pick your coffee</h3>
              </div>
              <div className="howitworks_plans__card_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since .
                </p>
              </div>
            </div>
            <div className="howitworks_plans__card">
              <div className="howitworks_plans__card_title">
                <h2>02</h2>
              </div>
              <div className="howitworks_plans__card_header">
                <h3> Choose the frequency</h3>
              </div>
              <div className="howitworks_plans__card_content">
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised
                </p>
              </div>
            </div>
            <div className="howitworks_plans__card">
              <div className="howitworks_plans__card_title">
                <h2>03</h2>
              </div>
              <div className="howitworks_plans__card_header">
                <h3>Receive and enjoy!</h3>
              </div>
              <div className="howitworks_plans__card_content">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
          <div className="howitworks_button">
            <Button buttonText="create your plan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
