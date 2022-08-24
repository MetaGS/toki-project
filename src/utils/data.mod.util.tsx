import { IMetal } from "../services/types";
import { IData, ITick } from "../types/interfaces";
import { getMonth } from "./date.utils";

export const extract24Hours = (data: IMetal[]): IMetal[] => {
  const dividend = Math.round(data.length / 24);

  return data.filter((_, index) => index % dividend === 0);
};

const prepareDataForChartAndLocalStorage = (data: any): IData => {
  const labels: string[] = [];
  const values: number[] = [];
  data.forEach((tick: ITick) => {
    labels.push(getMonth(new Date(tick.t)));
    values.push(tick.c);
  });

  return { labels, values, date: new Date() };
};
