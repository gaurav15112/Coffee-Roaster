import React, { useState } from "react";
import style from "./Prefences.module.scss";
import arrow from "../../../public/assets/Vector.svg";
import Image from "next/image";
import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../Button/Button";
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
          name: "quantity",
        },
        {
          title: " 500g",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
          name: "quantity",
        },
        {
          title: " 1000g",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
          name: "quantity",
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
          name: "grind",
        },
        {
          title: " Filter",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
          name: "grind",
        },
        {
          title: " Cafetiere",
          description:
            "Perfect for the solo drinker.Yields about 12 delicious cups.",
          name: "grind",
        },
      ],
    },
    {
      heading: "How often should we deliver?",
      data: [
        {
          title: " Every week",
          description: "$14.00 per shipment includes free first-class shipping",
          name: "deliver",
        },
        {
          title: " Every 2 weeks",
          description: "$17.25 per shipment. includes free priority shipping",
          name: "deliver",
        },
        {
          title: " Every month",
          description: "$22.50 per shipment. includes free priority shipping",
          name: "deliver",
        },
      ],
    },
  ],
};

const Prefences = ({ props }: any) => {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [coffee, setCoffee] = useState({
    flavour: "",
    taste: "",
    quantity: "",
    grind: "",
    deliver: "",
  });
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleArrow = (index: any) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
    // setOpen(!isOpen);
  };
  const handleRadioChange = (name: string, value: string) => {
    setCoffee((prevCoffee) => ({
      ...prevCoffee,
      [name]: value,
    }));
  };
  const allFieldsFilled = Object.values(coffee).every((value) => value !== "");

  const handleCreatePlan = () => {
    if (allFieldsFilled) {
      alert("Your plan has been created!");
    } else {
      alert("Please fill in all fields to create your plan.");
    }
  };
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleHeadingClick = (index: number) => {
    setClickedIndex(index);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={`${style.prefences}`}>
            <div className="prefences_container">
              {choices.prefencesTable.map((item, index) => {
                return (
                  <React.Fragment key={item.serialno || index}>
                    <div className="prefences_container_table ">
                      <div className="prefences_container_table__title ">
                        {item.serialno}
                      </div>
                      <div className="prefences_container_table__heading">
                        {item.title}
                      </div>
                    </div>
                    <div className="prefences_container_table_line"></div>
                  </React.Fragment>
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
                        {item?.data?.map((card, index) => {
                          return (
                            <label key={index}>
                              <input
                                type="radio"
                                name={`${card.name}`}
                                id={`card-${index}`}
                                onChange={() =>
                                  handleRadioChange(card.name, card.title)
                                }
                              />
                              <div
                                key={index}
                                className="prefences_secondCont_secondConts_cards clicked "
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
              {allFieldsFilled && <OrderSummary coffee={coffee} />}
              <Button buttonText="Create my plan" onClick={handleCreatePlan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prefences;
