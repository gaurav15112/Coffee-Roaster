import React from "react";
import style from "./OurCollection.module.scss";
import Image from "next/image";
const OurCollection: React.FC = () => {
  return (
    <>
      <div className={`${style.ourcollect} container-fluid`}>
        <div className="container">
          <div className="ourcollect_heading">Our Collection</div>

          <div className="ourcollect_card-container">
            <div className="ourcollect_card-container_card">
              <div className="ourcollect_card-container_card_image">
                <Image
                  src="/assets/a17.png"
                  width={200}
                  height={200}
                  alt="image"
                />
              </div>
              <div className="ourcollect_card-container_card_text">
                Gran Sepresso
              </div>
              <div className="ourcollect_card-container_card_content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="ourcollect_card-container_card">
              <div className="ourcollect_card-container_card_image">
                <Image
                  src="/assets/a17.png"
                  width={200}
                  height={200}
                  alt="image"
                />
              </div>
              <div className="ourcollect_card-container_card_text">
                Gran Sepresso
              </div>
              <div className="ourcollect_card-container_card_content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="ourcollect_card-container_card">
              <div className="ourcollect_card-container_card_image">
                <Image
                  src="/assets/a17.png"
                  width={200}
                  height={200}
                  alt="image"
                />
              </div>
              <div className="ourcollect_card-container_card_text">
                Gran Sepresso
              </div>
              <div className="ourcollect_card-container_card_content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="ourcollect_card-container_card">
              <div className="ourcollect_card-container_card_image">
                <Image
                  src="/assets/a17.png"
                  width={200}
                  height={200}
                  alt="image"
                />
              </div>
              <div className="ourcollect_card-container_card_text">
                Gran Sepresso
              </div>
              <div className="ourcollect_card-container_card_content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollection;
