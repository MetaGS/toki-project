import { ChartData } from "chart.js";
import { currentPriceEndpoints } from "../services";
import { CurrentPrice, IHistoryEntry, IMetal } from "../services/types";
import { IData, ITick } from "../types/interfaces";
import { getMonth } from "./date.utils";

export const extract24Hours = (data: IMetal[]): IMetal[] => {
  const dividend = Math.round(data.length / 24);

  return data.filter((_, index) => index % dividend === 0);
};

export const prepareDataForChartAndLocalStorage = (data: IHistoryEntry): IData => {
  const labels: string[] = [];
  const values: number[] = [];
  data.results.forEach((tick: ITick) => {
    labels.push(getMonth(new Date(tick.t)));
    values.push(tick.c);
  });

  return { labels, values, date: new Date() };
};

export const preparePricesData = (prices: CurrentPrice[]): CurrentPrice => {
  return prices.reduce((accPrices: CurrentPrice, currPrice: CurrentPrice) => {
    const [key, value] = Object.entries(currPrice)[0] as [keyof CurrentPrice, any];
    accPrices[key] = value;
    return accPrices;
  });
};

export const prepareDataForChart = (
  data: IData,
  options: { backgroundColor: string; borderColor: string } = {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "rgba(255,255,255,1)",
  }
): ChartData<"line"> => {
  return {
    labels: data.labels,
    datasets: [{ data: data.values, ...options }],
  };
};
