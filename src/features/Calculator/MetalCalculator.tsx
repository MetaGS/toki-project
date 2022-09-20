import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import InputLabel from "../../components/InputLabel/InputLabel";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import WrapperWithBorder from "../../components/WrapperWithBorder/WrapperWithBorder";
import { MetalKeys } from "../../services/types";
import { downloadMetals } from "./CalculatorSlice";
import CalculatorFooter from "./components/CalculatorFooter";
import MetalUnit from "./components/MetalUnit";
import styles from "./styles.module.css";

const currentDate = new Intl.DateTimeFormat("ru-RU").format(new Date());

export default function MetalCalculator() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(downloadMetals());
  }, []);

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
        <MetalUnit metalUnit="platinum" inputTitle="Pt" />
        <MetalUnit metalUnit="palladium" inputTitle="Pd" />
        <MetalUnit metalUnit="rhodium" inputTitle="Rh" />
      </div>
      <div className={styles.footer}>
        <CalculatorFooter />
      </div>
    </WrapperWithBorder>
  );
}
