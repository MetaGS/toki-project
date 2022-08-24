import React from "react";
import WrapperWithBorder from "../../components/WrapperWithBorder/WrapperWithBorder";
import styles from "./styles.module.css";

export default function MetalTable() {
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
            <td>990</td>
            <td>986</td>
            <td>-0.75</td>
          </tr>
          <tr>
            <td>Paladium</td>
            <td>990</td>
            <td>986</td>
            <td>-0.75</td>
          </tr>
          <tr>
            <td>Rhodium</td>
            <td>990</td>
            <td>986</td>
            <td>-0.75</td>
          </tr>
        </tbody>
      </table>
    </WrapperWithBorder>
  );
}
