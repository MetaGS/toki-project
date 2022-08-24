import React from "react";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "text" | "number";
  placeholder?: string;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
