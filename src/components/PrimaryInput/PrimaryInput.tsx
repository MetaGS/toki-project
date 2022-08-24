import React from "react";
import DefaultInput from "../DefaultInput/DefaultInput";
import InputLabel from "../InputLabel/InputLabel";
import styles from "./styles.module.css";

interface Props {
  title: string;
}

export default function PrimaryInput({ title }: Props) {
  return (
    <div className={styles.wrapper}>
      <InputLabel title={title} className={styles.primaryInputLabel}>
        <DefaultInput className={styles.primaryInput} />
      </InputLabel>
    </div>
  );
}
