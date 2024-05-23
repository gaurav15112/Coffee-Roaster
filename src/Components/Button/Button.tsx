import React from "react";
import styles from "../Button/Button.module.scss";
import Link from "next/link";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <input
        onClick={props.onClick}
        type="button"
        value={props.buttonText}
        className={styles.button}
      />
    </>
  );
};
export default Button;
