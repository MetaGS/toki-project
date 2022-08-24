import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function InputLabel({ children, title, className }: Props) {
  return (
    <label className={`${styles.label} ${className}`}>
      <span className={styles.text}>{title}</span>
      {children}
    </label>
  );
}
