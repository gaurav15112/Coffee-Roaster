import React from "react";
import style from "./Prefences.module.scss";
const Prefences = () => {
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
              <div className="prefences_container_table">
                <div className="prefences_container_table__title">02</div>
                <div className="prefences_container_table__heading">
                  Bean Type
                </div>
              </div>
              <div className="prefences_container_table_line"></div>
              <div className="prefences_container_table">
                <div className="prefences_container_table__title">03</div>
                <div className="prefences_container_table__heading">
                  Quanity
                </div>
              </div>
              <div className="prefences_container_table_line"></div>
              <div className="prefences_container_table">
                <div className="prefences_container_table__title">04</div>
                <div className="prefences_container_table__heading">
                  Grind Option
                </div>
              </div>
              <div className="prefences_container_table_line"></div>
              <div className="prefences_container_table">
                <div className="prefences_container_table__title">05</div>
                <div className="prefences_container_table__heading">
                  Deliveries
                </div>
              </div>
              <div className="prefences_container_table_line"></div>
            </div>

            <div className="prefences_secondCont">
              <div className="prefences_secondCont_card">
                <div className="prefences_secondCont_card__heading">
                  How do you drink your coffee?
                </div>
                <div className="prefences_secondCont_secondConts">
                  <div className="prefences_secondCont_secondConts_cards">
                    <div className="prefences_secondCont_secondConts_cards_title">
                      Capsule
                    </div>
                    <div className="prefences_secondCont_secondConts_cards_content">
                      Compatible with Nespresso systems and similar brewers
                    </div>
                  </div>
                  <div className="prefences_secondCont_secondConts_cards">
                    <div className="prefences_secondCont_secondConts_cards_title">
                      Filter
                    </div>
                    <div className="prefences_secondCont_secondConts_cards_content">
                      Compatible with Nespresso systems and similar brewers
                    </div>
                  </div>
                  <div className="prefences_secondCont_secondConts_cards">
                    <div className="prefences_secondCont_secondConts_cards_title">
                      Espresso
                    </div>
                    <div className="prefences_secondCont_secondConts_cards_content">
                      Compatible with Nespresso systems and similar brewers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prefences;
