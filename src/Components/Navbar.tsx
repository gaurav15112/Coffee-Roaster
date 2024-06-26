import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
interface Navbar {
  logo: {
    alt: string;
    path: string;
  };
  links: Array<{
    path: string;
    name: string;
  }>;
}

const data = {
  logo: {
    alt: "coffee roasters",
    path: "/assets/logo.png",
  },
  links: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/aboutpage",
      name: "About us",
    },
    {
      path: "#",
      name: "Create Your Plan",
    },
    {
      path: "/",
      name: "contact us",
    },
  ],
};
const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const navbar: Navbar = data;

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

  return (
    <>
      <header className="header container-fluid ">
        <nav className={`${styles.navbar} container`}>
          <div className="navbar_logo">
            <Link href={navbar?.logo?.path}>
              <Image
                src={navbar?.logo?.path}
                alt={navbar?.logo?.alt}
                width={300}
                height={80}
              />
            </Link>
          </div>
          <ul
            onClick={handleLinkClick}
            className={`navbar_links navbar__open ${
              isOpen ? "navbar_active" : ""
            } `}
          >
            {navbar.links.map((link, index) => {
              return (
                <Link key={index} href={link?.path}>
                  <li className="navbar_item">{link?.name}</li>
                </Link>
              );
            })}
          </ul>

          <div onClick={handleToggle} className="navbar__menuBtn ">
            <span
              className={`navbar__menuBtn${isOpen ? "--line1" : ""}`}
            ></span>
            <span
              className={`navbar__menuBtn${isOpen ? "--line2" : ""}`}
            ></span>
            <span
              className={`navbar__menuBtn${isOpen ? "--line3" : ""}`}
            ></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
