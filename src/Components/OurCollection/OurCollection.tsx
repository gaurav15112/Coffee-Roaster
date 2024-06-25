import React from "react";
import style from "./OurCollection.module.scss";
import Image from "next/image";
import packet from "../../../public/assets/lifafaa.svg";

interface ourCollection {
  title: string;

  cards: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}
const data = {
  title: "Our collection",
  cards: [
    {
      image: "assets/lifafaa.svg",
      title: "Gran Sepresso",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "assets/lifafaa.svg",
      title: "Planalto",
      description:
        "When an unknown printer took a galley of type and scrambled it specimen book.",
    },
    {
      image: "assets/lifafaa.svg",
      title: "Piccollo",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting",
    },
    {
      image: "assets/lifafaa.svg",
      title: "Danche",
      description: "Remaining essentially unchanged. It was popularised in the",
    },
  ],
};

const OurCollection: React.FC = () => {
  const ourcollection: ourCollection = data;
  return (
    <>
      <div className={`${style.ourcollect} container-fluid`}>
        <div className="container">
          <div className="ourcollect_heading">{ourcollection?.title}</div>
          <div className="ourcollect_wrapper">
            <div className="ourcollect_wrapper_card-container">
              {ourcollection.cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="ourcollect_wrapper_card-container_card"
                  >
                    {card?.image && (
                      <div className="ourcollect_wrapper_card-container_card_image">
                        <Image
                          src={card?.image}
                          alt={card?.title}
                          width={200}
                          height={200}
                        />
                      </div>
                    )}
                    {card?.title && (
                      <div className="ourcollect_wrapper_card-container_card_text">
                        {card?.title}
                      </div>
                    )}
                    {card?.description && (
                      <div className="ourcollect_wrapper_card-container_card_content">
                        {card?.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollection;
