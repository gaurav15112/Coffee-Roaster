import React from "react";
import footerstyle from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Footer {
  logo: {
    path: string;
    alt: string;
  };
  links: Array<{
    path: string;
    name: string;
  }>;

  socialLinks: Array<{
    platform: string;
    url: string;
    path: string;
  }>;
}
const data = {
  logo: {
    path: "/assets/cofferoaster.svg",
    alt: "footer logo",
  },
  links: [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/",
      name: "ABOUT US",
    },
    {
      path: "/",
      name: "CREATE YOUR PLAN",
    },
    {
      path: "/",
      name: "CONTACT US",
    },
  ],
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
      path: "/assets/fb.svg",
    },
    {
      platform: "Twitter",
      url: "https://www.twitter.com",
      path: "assets/twitter.svg",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      path: "assets/insta.svg",
    },
  ],
};
const Footer: React.FC = () => {
  const footer: Footer = data;
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={footerstyle.footer}>
            <div className="footer_logo">
              <Link href={footer?.logo?.path} target="_blank">
                <Image
                  src={footer?.logo?.path}
                  alt={footer?.logo?.alt}
                  width={300}
                  height={80}
                />
              </Link>
            </div>
            <ul className="footer_links">
              {footer.links.map((links, index) => {
                return (
                  <Link key={index} href={links?.path}>
                    <li className="footer_item">{links?.name}</li>
                  </Link>
                );
              })}
            </ul>
            <div className="footer_social">
              <div className="footer_social_logo">
                {footer.socialLinks.map((socialLinks, index) => {
                  return (
                    <Link key={index} href={socialLinks?.url} target="_blank">
                      <Image
                        src={socialLinks?.path}
                        alt={socialLinks?.platform}
                        width={30}
                        height={30}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
