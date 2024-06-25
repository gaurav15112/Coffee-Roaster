import React from "react";
import styles from "./Hero.module.scss";
import { Playfair_Display_SC } from "next/font/google";
import Button from "../Button/Button";
import { HeroSectionData } from "@/pages/aboutpage";
const playfairDisplay = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
interface HeroProps {
  data: HeroSectionData;
}

const Hero: React.FC<HeroProps> = ({ data }: any) => {
  const { buttontext } = data;
  return (
    <div className="container-fluid">
      <div className={`${styles.banner} container`}>
        <div className="banner_inner">
          {data?.title && (
            <div className={`banner_heading ${playfairDisplay.className}`}>
              {data?.title}
            </div>
          )}
          {data?.data?.description && (
            <p className="banner_paragraph">{data?.description}</p>
          )}
          {buttontext && (
            <Button
              buttonText={buttontext}
              // onClick={() => {
              //   console.log("clicked");
              // }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
