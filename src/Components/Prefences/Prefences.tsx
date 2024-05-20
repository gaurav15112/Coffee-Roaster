import React, { useState } from "react";
import style from "./Prefences.module.scss";
import arrow from "../../../public/assets/Vector.svg";
import Image from "next/image";
const data = {
  prefences: [
    {
      title: " Capsule",
      description: "Compatible with Nespresso systems and similar brewers",
    },
    {
      title: " Decaf",
      description: "Compatible with Nespresso systems and similar brewers",
    },
    {
      title: " Blended",
      description: "Compatible with Nespresso systems and similar brewers",
    },
  ],
  prefencetable: [
    {
      title: "01",
      // o
    },
  ],
};

console.log(data);
const Prefences = () => {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleArrow = () => {
    setOpen(!isOpen);
    console.log(!isOpen);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={`${style.prefences}`}>
            <div className="prefences_container">
              <div className="prefences_container_table">
                <div className="prefences_container_table__title">01</div>
                <div className="prefences_container_table__heading">
                  Preferences
                </div>
              </div>
              <div className="prefences_container_table_line"></div>
            </div>

            <div className="prefences_secondCont">
              <div className="prefences_secondCont_card">
                {
                  <div
                    onClick={handleArrow}
                    className="prefences_secondCont_card__heading"
                  >
                    How do you drink your coffee?
                    <div
                      className={`prefences_secondCont_card__arrow ${
                        isOpen ? "rotateup" : ""
                      }`}
                    >
                      <Image src={arrow} alt="arrow" />
                    </div>
                  </div>
                }
                {isOpen && (
                  <div className="prefences_secondCont_secondConts">
                    {data.prefences.map((Prefences, index) => {
                      return (
                        <label htmlFor={`card-${index}`} key={index}>
                          <input
                            type="radio"
                            name="card"
                            id={`card-${index}`}
                          />
                          <div
                            key={index}
                            className="prefences_secondCont_secondConts_cards clicked"
                          >
                            <div className="prefences_secondCont_secondConts_cards_title">
                              {Prefences.title}
                            </div>
                            <div className="prefences_secondCont_secondConts_cards_content">
                              {Prefences.description}
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prefences;
