import React from "react";
import style from "./OrderSummary.module.scss";

const OrderSummary = () => {
  return (
    <>
      <div className="container">
        <div className={`${style.ordersummary} container-fluid`}>
          <div className="ordersummary__title ">Order Summary </div>
          <div className="ordersummary__description">
            I drink my coffee as <span>Filter</span> with a <span>Decaf</span>
            type of bean. <span>250g</span> ground ala <span>Cafetiere</span>
            sent to me <span>Every Week.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
