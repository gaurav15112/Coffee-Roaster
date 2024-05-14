import React from "react";
import styles from "./Hero.module.scss";
import { Playfair_Display_SC } from "next/font/google";
import Button from "../Button/Button";
import componentdata from "../../../public/data.json";
import { log } from "console";
const playfairDisplay = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
// const { herosection } = componentdata;
// console.log(herosection);
const Hero: React.FC = (props: any) => {
  console.log(props);
  const { buttontext } = props?.data;
  return (
    <div className="container-fluid">
      <div className={`${styles.banner} container`}>
        <div className="banner_inner">
          {props?.data?.title && (
            <div className={`banner_heading ${playfairDisplay.className}`}>
              {props?.data?.title}
            </div>
          )}
          {props?.data?.description && (
            <p className="banner_paragraph">{props?.data?.description}</p>
          )}
          {buttontext && <Button buttonText={buttontext} />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
