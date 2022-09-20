import { CurrentPrice, MetalKeys } from "../../services/types";

export type metals = Exclude<keyof typeof MetalKeys, "currentPrice">;

export type PercentagePayload = {
  percentage: number;
  metal: Exclude<keyof typeof MetalKeys, "currentPrice">;
};

export type CompoundPayload = {
  metal: Exclude<keyof typeof MetalKeys, "currentPrice">;
  compound: number;
};

export type PricePayload = {
  metal: metals;
  price: number;
};

export interface IMetalsOptions {
  platinum: number;
  palladium: number;
  rhodium: number;
}

export interface CalculatorState {
  currentPrice: CurrentPrice;
  percentages: IMetalsOptions;
  compound: IMetalsOptions;
  localPrice: IMetalsOptions;
  netWeight: number;
}
