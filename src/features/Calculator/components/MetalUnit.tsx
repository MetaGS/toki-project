import React, { useMemo, useState } from "react";
import PrimaryInput from "../../../components/PrimaryInput/PrimaryInput";
import classNames from "classnames";
import styles from "../styles.module.css";
import { metals } from "../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectSingleCompound,
  selectSingleCustomPrice,
  selectSinglePercentage,
  selectSinglePrice,
} from "../selectors";
import { RootState } from "../../../app/store";
import {
  setCompound,
  setCurrentPrice,
  setCustomPrice,
  setPercentage,
} from "../CalculatorSlice";
import { useSelectorWithProps } from "../../../hooks/useSelectorHook";

interface Props {
  className?: string;
  inputTitle: string;
  metalUnit: metals;
}

const regexMathOnlyNumbers = /^([0-9]{1,})?(\.)?([0-9]{1,})?$/;

export default function MetalUnit({ className, inputTitle, metalUnit }: Props) {
  const currentPrice = useSelectorWithProps(metalUnit, selectSingleCustomPrice);
  const currentPercentage = useSelectorWithProps(metalUnit, selectSinglePercentage);
  const currentCompound = useSelectorWithProps(metalUnit, selectSingleCompound);

  const [localCompound, setLocalCompound] = useState(String(currentCompound));

  const dispatch = useAppDispatch();

  const onPriceChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setCustomPrice({
          metal: metalUnit,
          price: +e.target.value,
        })
      );
    },
    [metalUnit]
  );

  const onChangeEnd = React.useCallback(() => {
    dispatch(
      setCustomPrice({ metal: metalUnit, price: parseFloat(String(currentPrice)) })
    );
  }, [currentPrice]);

  const onPercentageChangeEnd = React.useCallback(() => {
    dispatch(
      setPercentage({
        metal: metalUnit,
        percentage: parseFloat(String(currentPercentage)),
      })
    );
  }, [currentPercentage]);

  const onPercentageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setPercentage({ metal: metalUnit, percentage: +e.target.value }));
    },
    [metalUnit]
  );

  const onCompoundChangeEnd = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setCompound({
          metal: metalUnit,
          compound: +e.target.value,
        })
      );
    },
    [currentCompound]
  );

  const onCompoundChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalCompound(e.target.value);
      dispatch(
        setCompound({
          metal: metalUnit,
          compound: +e.target.value,
        })
      );
    },
    [metalUnit]
  );

  return (
    <article className={classNames(styles.metalUnit, className)}>
      <PrimaryInput
        title={inputTitle}
        value={String(currentPrice)}
        onChange={onPriceChange}
        onBlur={onChangeEnd}
        type="number"
      />
      <PrimaryInput
        title="%"
        value={String(currentPercentage)}
        onChange={onPercentageChange}
        onBlur={onPercentageChangeEnd}
        type="number"
        max={100}
        min={0}
        step={5}
      />
      <PrimaryInput
        title="gr"
        value={localCompound}
        onChange={onCompoundChange}
        onBlur={onCompoundChangeEnd}
        type="number"
        min={0}
      />
    </article>
  );
}
