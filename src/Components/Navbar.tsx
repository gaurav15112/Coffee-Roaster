import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <header className="header container-fluid ">
        <nav className={`${styles.navbar} container`}>
          <div className="navbar_logo">
            <Link href={"#"}>
              <Image
                src="/assets/logo.png"
                alt="coffee roasters"
                width={300}
                height={80}
              />
            </Link>
          </div>
          <ul
            className={`navbar_links navbar__open ${
              isOpen ? "navbar_active" : ""
            } `}
          >
            <Link href="/">
              <li className="navbar_item">Home</li>
            </Link>
            <Link href="/aboutpage">
              <li className="navbar_item">About us</li>
            </Link>
            <Link href="#">
              <li className="navbar_item">Create Your Plan</li>
            </Link>
          </ul>

          <div onClick={handleToggle} className="navbar__MenuButton ">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
