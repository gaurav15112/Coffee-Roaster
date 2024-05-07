import React from "react";
import style from "./WhyChooseUs.module.scss";
import Image from "next/image";
import beanlogo from "../../../public/assets/bxs_coffee-bean.svg";
import giftpack from "../../../public/assets/Vector.svg";
import truckvan from "../../../public/assets/fa-solid_shipping-fast.svg";
const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`${style.WhyChooseUs} container`}>
          <div className="WhyChooseUs_heading">
            <div className="WhyChooseUs_heading_head">Why choose us?</div>
            <div className="WhyChooseUs_heading_para">
              A large part of our role is choosing which particular coffees will
              be featured in our range.This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level
            </div>
          </div>
          <div className="WhyChooseUs_section">
            <div className="WhyChooseUs_section_card">
              <div className="WhyChooseUs_section_card_container">
                <div className="logo">
                  <Image src={beanlogo} alt="beanlogo" />
                </div>

                <div className="card-title">Best quality</div>
                <div className="card-text">
                  <p>
                    Discover an endless variety of the world s best artisan
                    coffee from each of our roasters.
                  </p>
                </div>
              </div>
            </div>

            <div className="WhyChooseUs_section_card">
              <div className="WhyChooseUs_section_card_container">
                <div className="logo">
                  <Image src={giftpack} alt="logo" />
                </div>

                <div className="card-title">Exclusive benefits</div>
                <div className="card-text">
                  <p>
                    Specilal offers and swag when you subscribe including 30%
                    off your first shipment.
                  </p>
                </div>
              </div>
            </div>

            <div className="WhyChooseUs_section_card">
              <div className="WhyChooseUs_section_card_container">
                <div className="logo">
                  <Image src={truckvan} alt="logo" />
                </div>

                <div className="card-title">Free shipping</div>
                <div className="card-text">
                  <p>
                    We cover the cost and coffee is delivered fast.Peak
                    freshness guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
