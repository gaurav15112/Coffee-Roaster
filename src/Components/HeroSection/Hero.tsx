import React from "react";
import styles from "./Hero.module.scss";
import { Playfair_Display_SC } from "next/font/google";
const playfairDisplay = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
function Hero() {
  return (
    <>
      <div className={styles.banner}>
        <div className={`banner_heading ${playfairDisplay.className}`}>
          Great coffee made simple
        </div>
        <p className="banner_paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </>
  );
}

export default Hero;
