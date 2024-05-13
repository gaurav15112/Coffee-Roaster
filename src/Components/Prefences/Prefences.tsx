import React from "react";
import style from "./Prefences.module.scss";
const Prefences = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={`${style.prefences}`}>
            <div className="prefences_table">
              <div className="prefences_table_title">01</div>
              <div className="prefences_table_heading">Preferences</div>
            </div>
            <div className="prefences_table_line"></div>
            <div className="prefences_table">
              <div className="prefences_table_title">02</div>
              <div className="prefences_table_heading">Bean Type</div>
            </div>
            <div className="prefences_table_line"></div>
            <div className="prefences_table">
              <div className="prefences_table_title">03</div>
              <div className="prefences_table_heading">Quanity</div>
            </div>
            <div className="prefences_table_line"></div>
            <div className="prefences_table">
              <div className="prefences_table_title">04</div>
              <div className="prefences_table_heading">Grind Option</div>
            </div>
            <div className="prefences_table_line"></div>
            <div className="prefences_table">
              <div className="prefences_table_title">05</div>
              <div className="prefences_table_heading">Deliveries</div>
            </div>
            <div className="prefences_table_line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prefences;
