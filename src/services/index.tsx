import axios from "axios";
import { getDate, getDate30DaysAgo } from "../utils/date.utils";
import {
  ICurrentPriceMain,
  ICurrentPriceSecondary,
  IHistoryEntry,
  IMetal,
} from "./types";

const baseURL = `https://api.polygon.io/v2/aggs/ticker/`;
const API_KEY = "qQKrDkpO6QOUyzQPXjpqzkfWCZjWdnQ7";

const params = (symbol: string) =>
  `${symbol}/range/1/day/${getDate(getDate30DaysAgo())}/${getDate(
    new Date()
  )}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`;

const metalsAPI = axios.create({
  baseURL,
});

metalsAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Error with metals API", error);
    throw error;
  }
);

const currentPriceAPI = axios.create({
  baseURL: `https://api.metals.live/v1/spot`,
});

// currentPriceAPI.interceptors.response.use((response) => response.data);

export const historyEndpoints = {
  platinum: () => metalsAPI.get<IHistoryEntry>(params("C:XPTUSD")),
  palladium: () => metalsAPI.get<IHistoryEntry>(params("C:XPDUSD")),
  rhodium: () => Promise.reject("Not implemented"),
  // rhodium: () => metalsAPI.get<IMetal[]>(params("C:XRHUSD")),
};

export const currentPriceEndpoints = {
  mainSyms: () =>
    currentPriceAPI.get<ICurrentPriceMain[]>("https://api.metals.live/v1/spot"),
  secondarySyms: () => currentPriceAPI.get<ICurrentPriceSecondary[]>("/commodities"),
};
