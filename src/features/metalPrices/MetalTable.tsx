import React from "react";
import WrapperWithBorder from "../../components/WrapperWithBorder/WrapperWithBorder";
import { useSelectorWithProps } from "../../hooks/useSelectorHook";
import { selectSinglePrice } from "../Calculator/selectors";
import styles from "./styles.module.css";

export default function MetalTable() {
  const stockPricePlatinum =
    parseInt(useSelectorWithProps("platinum", selectSinglePrice)) ?? 0;
  const stockPricePalladium =
    parseInt(useSelectorWithProps("palladium", selectSinglePrice)) ?? 0;
  const stockPriceRhodium =
    parseInt(useSelectorWithProps("rhodium", selectSinglePrice)) ?? 0;

  return (
    <WrapperWithBorder title="Metal">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Metals</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platinum</td>
            <td>{stockPricePlatinum}</td>
            <td>{stockPricePlatinum}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Paladium</td>
            <td>{stockPricePalladium}</td>
            <td>{stockPricePalladium}</td>
            <td>0.75</td>
          </tr>
          <tr>
            <td>Rhodium</td>
            <td>{stockPriceRhodium}</td>
            <td>{stockPriceRhodium}</td>
            <td>0.75</td>
          </tr>
        </tbody>
      </table>
    </WrapperWithBorder>
  );
}
