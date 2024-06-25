import React from "react";
import style from "./HowItWork.module.scss";
import Button from "../Button/Button";

interface HowItWork {
  heading: string;
  cards: Array<{
    sno: string;
    title: string;
    description: string;
  }>;
}
const data = {
  heading: " How it works",
  cards: [
    {
      sno: "01",
      title: "Pick your coffee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
    {
      sno: "02",
      title: "Choose the frequency",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
    },
    {
      sno: "03",
      title: "Receive and enjoy!",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ],
};
const HowItWork: React.FC<HowItWork> = (props: any) => {
  const howitworks: HowItWork = data;
  return (
    <>
      <div className="container-fluid">
        <div
          className={`${style.howitworks}  container`}
          style={{ backgroundColor: props.backgroundcolor }}
        >
          <div className="howitworks_heading ">
            <div
              className="howitworks_heading__title"
              style={{ display: props.isVisible ? "block" : "none" }}
            >
              <h2> {howitworks.heading}</h2>
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
            {howitworks.cards.map((card, index) => {
              return (
                <>
                  <div key={index} className="howitworks_plans__card">
                    <div className="howitworks_plans__card_title">
                      <h2>{card?.sno}</h2>
                    </div>
                    <div className="howitworks_plans__card_header">
                      <h3 style={{ color: props.textColor }}>{card?.title}</h3>
                    </div>
                    <div className="howitworks_plans__card_content">
                      <p style={{ color: props.paragrphColr }}>
                        {card?.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
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
