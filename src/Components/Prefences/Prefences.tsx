import React, { useState } from "react";
import style from "./Prefences.module.scss";
import arrow from "../../../public/assets/Vector.svg";
import Image from "next/image";

const choices = {
  prefencesTable: [
    {
      serialno: "01",
      title: "Prefences",
    },
    { serialno: "02", title: "Bean Type" },
    { serialno: "03", title: "Quanity" },
    { serialno: "04", title: "Grind Option" },
    { serialno: "05", title: "Deliveries" },
  ],

  prefences: [
    {
      heading: "How do you drink your coffee?",
      data: [
        {
          title: " Capsule",
          name: "flavour",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: " Filter",
          name: "flavour",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: " Espresso",
          name: "flavour",
          description: "Compatible with Nespresso systems and similar brewers",
        },
      ],
    },

    {
      heading: "  What type of coffee?",
      data: [
        {
          title: " Single Origin",
          name: "taste",
          description: "Com patible with Nespresso systems and similar brewers",
        },
        {
          title: " Decaf",
          name: "taste",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: " Blended",
          name: "taste",
          description: "Compatible with Nespresso systems and similar brewers",
        },
      ],
    },
    {
      heading: " How much would you like?",
      data: [
        {
          title: " 250g",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
        {
          title: " 500g",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
        {
          title: " 1000g",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
      ],
    },
    {
      heading: "Want us to grind them?",
      data: [
        {
          title: " Wholebean",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
        {
          title: " Filter",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
        {
          title: " Cafetiere",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
        },
      ],
    },
    {
      heading: "How often should we deliver?",
      data: [
        {
          title: " Every week",
          description: "$14.00 per shipment includes free first-class shipping",
        },
        {
          title: " Every 2 weeks",
          description: "$17.25 per shipment. includes free priority shipping",
        },
        {
          title: " Every month",
          description: "$22.50 per shipment. includes free priority shipping",
        },
      ],
    },
  ],
};

const Prefences = () => {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);

  const handleArrow = (index: any) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
    // setOpen(!isOpen);
  };

  const handleCardClick = (cardIndex: number) => {
    setClickedIndexes((prevClickedIndexes) =>
      prevClickedIndexes.includes(cardIndex)
        ? prevClickedIndexes.filter((i) => i !== cardIndex)
        : [...prevClickedIndexes, cardIndex]
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={`${style.prefences}`}>
            <div className="prefences_container">
              {choices.prefencesTable.map((item) => {
                return (
                  <>
                    <div className="prefences_container_table">
                      <div className="prefences_container_table__title">
                        {item.serialno}
                      </div>
                      <div className="prefences_container_table__heading">
                        {item.title}
                      </div>
                    </div>
                    <div className="prefences_container_table_line"></div>
                  </>
                );
              })}
            </div>

            <div className="prefences_secondCont">
              {choices.prefences.map((item, index) => {
                return (
                  <div key={index} className="prefences_secondCont_card">
                    <div
                      onClick={() => handleArrow(index)}
                      className="prefences_secondCont_card__heading"
                    >
                      {item?.heading}
                      <div
                        className={`prefences_secondCont_card__arrow ${
                          openIndexes.includes(index) ? "rotateup" : ""
                        }`}
                      >
                        <Image src={arrow} alt="arrow" />
                      </div>
                    </div>

                    {openIndexes.includes(index) && (
                      <div className="prefences_secondCont_secondConts">
                        {item?.data?.map((card, cardIndex) => {
                          return (
                            <label htmlFor={`card-${index}`} key={index}>
                              <input
                                type="radio"
                                name={card?.name}
                                id={`card-${index}`}
                                value={card?.title}
                                onClick={() => handleCardClick(cardIndex)}
                              />
                              <div
                                key={index}
                                className={`prefences_secondCont_secondConts_cards ${
                                  clickedIndexes.includes(cardIndex)
                                    ? "clicked"
                                    : ""
                                } 
                          `}
                              >
                                <div className="prefences_secondCont_secondConts_cards_title">
                                  {card.title}
                                </div>
                                <div className="prefences_secondCont_secondConts_cards_content">
                                  {card.description}
                                </div>
                              </div>
                            </label>
                          );
                        })}
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

export default Prefences;
