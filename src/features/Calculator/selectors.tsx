import { RootState } from "../../app/store";
import { metals } from "./types";

export const selectCalculator = (state: RootState) => state.calculator;

export const selectPercentages = (state: RootState) => state.calculator.percentages;

export const selectCompounds = (state: RootState) => state.calculator.compound;

export const selectCurrentPrices = (state: RootState) => state.calculator.currentPrice;

export const selectSinglePrice = (metal: metals) => (state: RootState) =>
  state.calculator.currentPrice[metal] || "";

export const selectSingleCustomPrice = (metal: metals) => (state: RootState) =>
  state.calculator.localPrice[metal] || 0;

export const selectSingleCompound = (metal: metals) => (state: RootState) =>
  state.calculator.compound[metal] || 0;

export const selectSinglePercentage = (metal: metals) => (state: RootState) =>
  state.calculator.percentages[metal];

export const selectNetWeight = (state: RootState) => state.calculator.netWeight;
