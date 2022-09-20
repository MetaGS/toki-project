import { useSelector } from "react-redux";
import {
  selectSingleCompound,
  selectSingleCustomPrice,
  selectSinglePercentage,
} from "../features/Calculator/selectors";
import { metals } from "../features/Calculator/types";
import { calculateMetalCompoundPrice } from "../utils/calculation.utils";
import { useSelectorWithProps } from "./useSelectorHook";

export const useSelectAllPropertiesForMetal = (metal: metals): number => {
  const customPrice = useSelectorWithProps(metal, selectSingleCustomPrice);
  const compound = useSelectorWithProps(metal, selectSingleCompound);
  const percentage = useSelectorWithProps(metal, selectSinglePercentage);

  const price = customPrice ? customPrice : 0;

  return calculateMetalCompoundPrice({
    metalPrice: price,
    compound,
    percentage,
  });
};

export const useTotalCalculationHook = () => {
  const platinumCompoundPrice = useSelectAllPropertiesForMetal("platinum");
  const palladiumCompoundPrice = useSelectAllPropertiesForMetal("palladium");
  const rhodiumCompoundPrice = useSelectAllPropertiesForMetal("rhodium");

  const total = platinumCompoundPrice + palladiumCompoundPrice + rhodiumCompoundPrice;
  return {
    platinumCompoundPrice,
    palladiumCompoundPrice,
    rhodiumCompoundPrice,
    total: total.toFixed(2),
  };
};
