import React from "react";
import footerstyle from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={footerstyle.footer}></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
