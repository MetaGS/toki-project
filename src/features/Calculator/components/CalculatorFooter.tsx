import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DefaultInput from "../../../components/DefaultInput/DefaultInput";
import InputLabel from "../../../components/InputLabel/InputLabel";
import { useTotalCalculationHook } from "../../../hooks/useTotalCalculationHook";
import { setNetWeight } from "../CalculatorSlice";
import { selectNetWeight } from "../selectors";
import styles from "../styles.module.css";

export default function CalculatorFooter() {
  const netWeight = useAppSelector(selectNetWeight);
  const dispatch = useAppDispatch();

  const calcedForKg = useTotalCalculationHook();

  const handleNetWeightChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setNetWeight(+e.target.value));
    },
    []
  );

  return (
    <>
      <span className={styles.forSingleKg}>for kg: ${calcedForKg.total}</span>
      <InputLabel title="Net Weight">
        <DefaultInput
          className={styles.weightInput}
          onChange={handleNetWeightChange}
          type="number"
          {...{ value: String(netWeight) }}
        />
        <span>Kg</span>
        <div className={styles.total}>Total: {+calcedForKg.total * netWeight}$</div>
      </InputLabel>
    </>
  );
}
