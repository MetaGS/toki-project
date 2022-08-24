import React from "react";
import logo from "../../static/png/label.png";
import styles from "./styles.module.css";

export default function Label() {
  return (
    <div className={styles.labelWrapper}>
      <img className={styles.labelImage} src={logo} alt="pages logo" />
    </div>
  );
}
