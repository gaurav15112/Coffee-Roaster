import React from "react";
import styles from "./Hero.module.scss";
import { Playfair_Display_SC } from "next/font/google";
import Button from "../Button/Button";

const playfairDisplay = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
const Hero: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`${styles.banner} container`}>
          <div className="banner_inner">
            <div className={`banner_heading ${playfairDisplay.className}`}>
              Great coffee made simple
            </div>
            <p className="banner_paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, mollitia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <Button buttonText="Create your plan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
