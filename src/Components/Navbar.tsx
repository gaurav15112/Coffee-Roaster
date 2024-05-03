import React from "react";
import styles from "./Navbar.module.scss";
interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <>
      <header className="container-fluid">
        <nav className={`${styles.navbar} container`}>
          <div className="navbar_logo">{title}</div>
          <ul className="navbar_links">
            <li className="navbar_item">Home</li>
            <li className="navbar_item">About</li>
            <li className="navbar_item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
