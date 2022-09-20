import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  MetalConfigProvider,
  MetalDataProvider,
} from "../../services/metalDataProvider.service";
import { CurrentPrice } from "../../services/types";
import {
  CalculatorState,
  CompoundPayload,
  metals,
  PercentagePayload,
  PricePayload,
} from "./types";

const metalConfig = new MetalConfigProvider();

const initialState: CalculatorState = {
  currentPrice: {} as CurrentPrice,
  localPrice: metalConfig.getPrice(),
  percentages: metalConfig.getPercentages(),
  compound: metalConfig.getCompounds(),
  netWeight: 0,
};

export const CalculatorSlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    setPercentage(state, action: PayloadAction<PercentagePayload>) {
      const currentMetal = action.payload.metal;
      state.percentages[currentMetal] = action.payload.percentage;
      metalConfig.savePercentages(current(state).percentages);
    },
    setCompound(state, action: PayloadAction<CompoundPayload>) {
      const currentMetal = action.payload.metal;
      state.compound[currentMetal] = action.payload.compound;
      metalConfig.saveCompounds(current(state).compound);
    },
    setCurrentPrice(state, action: PayloadAction<CurrentPrice>) {
      state.currentPrice = action.payload;
    },
    setCustomPrice(state, action: PayloadAction<PricePayload>) {
      state.localPrice[action.payload.metal] = action.payload.price;
      metalConfig.savePrice(current(state).localPrice);
    },
    setNetWeight(state, action: PayloadAction<number>) {
      state.netWeight = action.payload;
    },
  },
});

export const {
  setPercentage,
  setCurrentPrice,
  setCompound,
  setCustomPrice,
  setNetWeight,
} = CalculatorSlice.actions;

export const downloadMetals = () => async (dispatch: any, getState: () => RootState) => {
  const currentPrices = await MetalDataProvider.getCurrentPrice();
  dispatch(setCurrentPrice(currentPrices));
};

export default CalculatorSlice.reducer;
