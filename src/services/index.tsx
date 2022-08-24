import axios from "axios";
import { getDate, getDate30DaysAgo } from "../utils/date.utils";
import { IMetal } from "./types";

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

export const historyEndpoints = {
  platinum: () => metalsAPI.get<IMetal[]>(params("C:XPTUSD")),
  palladium: () => metalsAPI.get<IMetal[]>(params("C:XPDUSD")),
  // rhodium: () => metalsAPI.get<IMetal[]>(params("C:XRHUSD")),
};

export const currentPriceEndpoints = {
  mainSyms: () => axios.get<IMetal[]>("https://api.metals.live/v1/spot"),
  secondarySyms: () => axios.get<IMetal[]>("https://api.metals.live/v1/spot/commodities"),
};
