import React from "react";
import styles from "../Button/Button.module.scss";
import Link from "next/link";

interface ButtonProps {
  buttonText: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <input type="button" value={props.buttonText} className={styles.button} />
    </>
  );
};
export default Button;
