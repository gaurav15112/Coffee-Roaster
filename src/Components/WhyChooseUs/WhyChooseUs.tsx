import React from "react";
import style from "./WhyChooseUs.module.scss";
import Image from "next/image";
import beanlogo from "../../../public/assets/bxs_coffee-bean.svg";
import giftpack from "../../../public/assets/bxs_gift.svg";
import truckvan from "../../../public/assets/fa-solid_shipping-fast.svg";

import { title } from "process";

interface WhyChooseUs {
  title: string;
  description: string;
  cards: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}
const data = {
  title: "Why Choose Us",
  description:
    "A large part of our role is choosing which particular coffees will be featured in our range.This means working closely with the best coffee growers to give you a more impactful experience on every level",
  cards: [
    {
      image: "assets/bxs_coffee-bean.svg",
      title: "Best quality",
      description:
        "Discover an endless variety of the world s best artisan coffee from each of our roasters.",
    },
    {
      image: "assets/bxs_gift.svg",
      title: "Exclusive benefits",
      description:
        "Specilal offers and swag when you subscribe including 30% off your first shipment.",
    },
    {
      image: "assets/fa-solid_shipping-fast.svg",
      title: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast.Peak freshness guaranteed",
    },
  ],
};
const WhyChooseUs: React.FC = () => {
  const whychooseus: WhyChooseUs = data;
  return (
    <>
      <div className="container-fluid">
        <div className={`${style.WhyChooseUs} container`}>
          <div className="WhyChooseUs_heading">
            <div className="WhyChooseUs_heading_head">{whychooseus?.title}</div>
            <div className="WhyChooseUs_heading_para">
              {whychooseus.description}
            </div>
          </div>
          <div className="WhyChooseUs_section">
            {whychooseus.cards.map((cards, index) => {
              return (
                <>
                  <div className="WhyChooseUs_section_card">
                    <div className="WhyChooseUs_section_card_container">
                      <div className="logo">
                        <Image
                          src={cards?.image}
                          alt={cards?.title}
                          width={60}
                          height={60}
                        />
                      </div>

                      <div className="card-title">{cards?.title}</div>
                      <div className="card-text">
                        <p>{cards?.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
