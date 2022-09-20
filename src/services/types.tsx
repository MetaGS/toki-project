import { IMetalsOptions } from "../features/Calculator/types";

export interface IMetal {
  price: string;
  timestamp: number;
}

export interface IMetalConfigProvider {
  getPrice: () => IMetalsOptions;
  savePrice: (value: IMetalsOptions) => void;
  getPercentages: () => IMetalsOptions;
  savePercentages: (value: IMetalsOptions) => void;
  getCompounds: () => IMetalsOptions;
  saveCompounds: (value: IMetalsOptions) => void;
}

export interface Result {
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: any;
  n: number;
}

export interface IHistoryEntry {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: Result[];
  status: string;
  request_id: string;
  count: number;
}

export interface ICurrentPriceMain {
  gold?: string;
  silver?: string;
  platinum?: string;
  palladium?: string;
  timestamp?: number;
}

export interface ICurrentPriceSecondary {
  iridium?: string;
  rhodium?: string;
  ruthenium?: string;
  lead?: string;
  aluminum?: string;
  copper?: string;
  nickel?: string;
  tin?: string;
  zinc?: string;
  cobalt?: string;
  bronze?: string;
  brass?: string;
  timestamp?: number;
}

export type CurrentPrice = ICurrentPriceMain & ICurrentPriceSecondary;

export enum MetalKeys {
  platinum = "C:XPTUSD",
  palladium = "C:XPDUSD",
  rhodium = "C:XRHUSD",
  currentPrice = "currentPrice",
}
