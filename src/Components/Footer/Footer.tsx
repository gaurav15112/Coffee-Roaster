import React from "react";
import footerstyle from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import fb from "../../../public/assets/fb.svg";
import twitter from "../../../public/assets/twitter.svg";
import insta from "../../../public/assets/insta.svg";
import coffeeroaster from "../../../public/assets/cofferoaster.svg";
const Footer: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={footerstyle.footer}>
            <div className="footer_logo">
              <Link href={"https://www.coffeeroaster.com"} target="_blank">
                <Image src={coffeeroaster} alt="coffee roasters" />
              </Link>
            </div>
            <ul className="footer_links">
              <Link href="#">
                <li className="footer_item">HOME</li>
              </Link>
              <Link href="#">
                <li className="footer_item">ABOUT US</li>
              </Link>
              <Link href="#">
                <li className="footer_item">CREATE YOUR PLAN</li>
              </Link>
            </ul>
            <div className="footer_social-logo">
              <div className="footer_social-logo__fb">
                <Link href={"https://www.facebook.com"} target="_blank">
                  <Image src={fb} alt="fblogo" />
                </Link>
              </div>
              <div className="footer_social-logo__twitter">
                <Link href={"https://www.twitter.com"} target="_blank">
                  <Image src={twitter} alt="twitterlogo" />
                </Link>
              </div>
              <div className="footer_social-logo__insta">
                <Link href={"https://www.instagram.com"} target="_blank">
                  <Image src={insta} alt="instalogo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
