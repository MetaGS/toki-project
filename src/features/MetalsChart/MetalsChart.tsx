import React, { ForwardedRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";

import styles from "./styles.module.css";
import { currentPriceEndpoints, historyEndpoints } from "../../services";
import { extract24Hours } from "../../utils/data.mod.util";
import { IMetal } from "../../services/types";
import { getMonth } from "../../utils/date.utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom" as const,
    },
  },
  scales: { x: { display: false }, y: { display: false } },
};

const scumData = {
  ticker: "C:XPDUSD",
  queryCount: 26,
  resultsCount: 26,
  adjusted: true,
  results: [
    {
      v: 2466,
      vw: 2003.0112,
      o: 2031.01,
      c: 2003.99,
      h: 2032,
      l: 1951.11,
      t: 1658707200000,
      n: 2466,
    },
    {
      v: 2668,
      vw: 1998.5744,
      o: 1995,
      c: 2008,
      h: 2023.5,
      l: 1964.95,
      t: 1658793600000,
      n: 2668,
    },
    {
      v: 2662,
      vw: 2012.5238,
      o: 2019,
      c: 2021,
      h: 2035,
      l: 1984.84,
      t: 1658880000000,
      n: 2662,
    },
    {
      v: 2706,
      vw: 2061.6217,
      o: 2021.36,
      c: 2075,
      h: 2095,
      l: 2019,
      t: 1658966400000,
      n: 2706,
    },
    {
      v: 2613,
      vw: 2093.5264,
      o: 2077,
      c: 2121,
      h: 2138.5,
      l: 2037,
      t: 1659052800000,
      n: 2613,
    },
    {
      v: 25,
      vw: 2106.1948,
      o: 2121,
      c: 2102,
      h: 2121,
      l: 2102,
      t: 1659225600000,
      n: 25,
    },
    {
      v: 2772,
      vw: 2154.4295,
      o: 2116.87,
      c: 2198,
      h: 2219.5,
      l: 2079.61,
      t: 1659312000000,
      n: 2772,
    },
    {
      v: 2895,
      vw: 2136.5371,
      o: 2198,
      c: 2064,
      h: 2222,
      l: 2035.77,
      t: 1659398400000,
      n: 2895,
    },
    {
      v: 2871,
      vw: 2039.2275,
      o: 2056,
      c: 1996,
      h: 2095,
      l: 1978.89,
      t: 1659484800000,
      n: 2871,
    },
    {
      v: 2808,
      vw: 2048.239,
      o: 1997,
      c: 2074,
      h: 2102.5,
      l: 1994.73,
      t: 1659571200000,
      n: 2808,
    },
    {
      v: 2478,
      vw: 2101.5419,
      o: 2064,
      c: 2112.19,
      h: 2147.5,
      l: 2057.11,
      t: 1659657600000,
      n: 2478,
    },
    {
      v: 17,
      vw: 2115.5988,
      o: 2112.19,
      c: 2116,
      h: 2116,
      l: 2112.19,
      t: 1659830400000,
      n: 17,
    },
    {
      v: 2332,
      vw: 2190.7035,
      o: 2115.99,
      c: 2220,
      h: 2257,
      l: 2115,
      t: 1659916800000,
      n: 2332,
    },
    {
      v: 2632,
      vw: 2212.984,
      o: 2230.5,
      c: 2223.5,
      h: 2261.5,
      l: 2176.51,
      t: 1660003200000,
      n: 2632,
    },
    {
      v: 2704,
      vw: 2222.7566,
      o: 2213,
      c: 2246,
      h: 2266.5,
      l: 2184,
      t: 1660089600000,
      n: 2704,
    },
    {
      v: 2748,
      vw: 2263.524,
      o: 2247,
      c: 2277.35,
      h: 2301,
      l: 2221,
      t: 1660176000000,
      n: 2748,
    },
    {
      v: 2427,
      vw: 2251.7039,
      o: 2290.5,
      c: 2209.99,
      h: 2292,
      l: 2201,
      t: 1660262400000,
      n: 2427,
    },
    {
      v: 38,
      vw: 2213.8882,
      o: 2209.99,
      c: 2213,
      h: 2226,
      l: 2209.99,
      t: 1660435200000,
      n: 38,
    },
    {
      v: 2600,
      vw: 2171.9591,
      o: 2212.76,
      c: 2136.57,
      h: 2234,
      l: 2112.74,
      t: 1660521600000,
      n: 2600,
    },
    {
      v: 2543,
      vw: 2133.872,
      o: 2137,
      c: 2144,
      h: 2175,
      l: 2098.49,
      t: 1660608000000,
      n: 2543,
    },
    {
      v: 2601,
      vw: 2137.9103,
      o: 2145,
      c: 2128,
      h: 2161.5,
      l: 2103.58,
      t: 1660694400000,
      n: 2601,
    },
    {
      v: 2624,
      vw: 2142.3515,
      o: 2127.18,
      c: 2142,
      h: 2185,
      l: 2118,
      t: 1660780800000,
      n: 2624,
    },
    {
      v: 2349,
      vw: 2127.6751,
      o: 2153,
      c: 2114.86,
      h: 2153,
      l: 874,
      t: 1660867200000,
      n: 2349,
    },
    {
      v: 2,
      vw: 2114.86,
      o: 2114.86,
      c: 2114.86,
      h: 2114.86,
      l: 2114.86,
      t: 1661040000000,
      n: 2,
    },
    {
      v: 2079,
      vw: 2027.7168,
      o: 2139.5,
      c: 1988,
      h: 2140,
      l: 1941.89,
      t: 1661126400000,
      n: 2079,
    },
    {
      v: 2646,
      vw: 1994.8996,
      o: 1991,
      c: 1975,
      h: 2038.23,
      l: 1958.55,
      t: 1661212800000,
      n: 2646,
    },
  ],
  status: "DELAYED",
  request_id: "5cdfc637557be9ec8c7c28a2dcb2fe19",
  count: 26,
};

//get month as a string from date

const labels = scumData.results.map((item) => getMonth(new Date(item.t)));

export const data = {
  labels,
  datasets: [
    {
      data: scumData.results.map((item) => item.c),
      borderColor: "rgba(185, 119, 191, 1)",
      backgroundColor: "rgba(185, 119, 191, 1)",
    },
  ],
};

export default function App() {
  const [data24, setData] = React.useState<IMetal[]>([]);
  const chartRef = React.useRef<Chart<"line">>();

  React.useEffect(() => {
    historyEndpoints
      .platinum()
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => {});

    historyEndpoints
      .palladium()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    if (chartRef.current && !chartRef.current.canvas.querySelector(styles.chartLogo)) {
      const logo = document.createElement("div");
      const logoText = document.createTextNode("Pt");
      logo.classList.add(styles.chartLogo);
      logo.appendChild(logoText);

      chartRef.current.canvas.appendChild(logo);
    }
  }, [chartRef]);

  return (
    <div className={styles.chartWrapper}>
      <Line options={options} ref={chartRef} data={data} />
      <label className={styles.chartLogo}>Pt</label>
    </div>
  );
}
