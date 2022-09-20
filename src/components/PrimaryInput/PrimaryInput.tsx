import React from "react";
import DefaultInput from "../DefaultInput/DefaultInput";
import InputLabel from "../InputLabel/InputLabel";
import styles from "./styles.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export default function PrimaryInput({ title, ...rest }: Props) {
  return (
    <div className={styles.wrapper}>
      <InputLabel title={title} className={styles.primaryInputLabel}>
        <DefaultInput className={styles.primaryInput} {...rest} />
      </InputLabel>
    </div>
  );
}
