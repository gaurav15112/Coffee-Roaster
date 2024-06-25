import React from "react";
import style from "./OrderSummary.module.scss";

const OrderSummary = ({ coffee }: any) => {
  return (
    <>
      <div className={`${style.ordersummary}`}>
        <div className={`ordersummary__container container-fluid`}>
          <div className="ordersummary__title ">ORDER SUMMARY </div>
          <div className="ordersummary__description">
            I drink my coffee as <span>{coffee.flavour}</span> with a
            <span> {coffee.taste} </span>
            Type of bean.<span> {coffee.quantity}</span> ground ala
            <span>{coffee.grind}</span> sent to me <span>{coffee.deliver}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
