import React from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  id?: string;
}

export default function componentName({ title }: Props) {
  return (
    <label className={styles.main}>
      <span className={styles.text}>{title}</span>
    </label>
  );
}
