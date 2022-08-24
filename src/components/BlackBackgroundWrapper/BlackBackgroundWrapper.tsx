import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

export default function BlackBackgroundWrapper(props: Props) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
