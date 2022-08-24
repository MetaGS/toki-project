import React from "react";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import InputLabel from "../../components/InputLabel/InputLabel";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import WrapperWithBorder from "../../components/WrapperWithBorder/WrapperWithBorder";
import styles from "./styles.module.css";

const currentDate = new Intl.DateTimeFormat("ru-RU").format(new Date());

export default function MetalCalculator() {
  return (
    <WrapperWithBorder title="Calculation">
      <div className={styles.header}>
        <InputLabel title="Provider">
          <DefaultInput
            placeholder="название"
            type="text"
            className={styles.providerInput}
          />
        </InputLabel>
        <InputLabel title="Date">
          <DefaultInput
            placeholder={currentDate}
            type="text"
            className={styles.providerInput}
          />
        </InputLabel>
      </div>
      <div className={styles.body}>
        <article className={styles.metalUnit}>
          <PrimaryInput title="Pt" />
          <PrimaryInput title="%" />
          <PrimaryInput title="gr" />
        </article>
        <article className={styles.metalUnit}>
          <PrimaryInput title="Pt" />
          <PrimaryInput title="%" />
          <PrimaryInput title="gr" />
        </article>
        <article className={styles.metalUnit}>
          <PrimaryInput title="Pt" />
          <PrimaryInput title="%" />
          <PrimaryInput title="gr" />
        </article>
      </div>
      <div className={styles.footer}>
        <InputLabel title="Net Weight">
          <DefaultInput className={styles.weightInput}></DefaultInput>
          <span>Kg</span>
          <div className={styles.total}>Total: 20689$</div>
        </InputLabel>
      </div>
    </WrapperWithBorder>
  );
}
