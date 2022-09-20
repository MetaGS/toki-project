import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput({
  onChange,
  placeholder,
  className,
  type = "text",
  ...rest
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      onChange={onChange}
      {...rest}
    />
  );
}
