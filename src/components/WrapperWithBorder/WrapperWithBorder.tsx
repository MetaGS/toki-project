import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function WrapperWithBorder({ children, title }: Props) {
  return (
    <section className={styles.wrapper}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </section>
  );
}
