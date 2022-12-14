import { useState } from "react";
import dynamic from "next/dynamic";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const series2 = [
  {
    name: "Maker",
    data: [20, 23, 24, 40, 47, 56, 50, 52, 65, 78, 80, 99],
  },
  {
    name: "FRAX 3Crv",
    data: [23, 32, 43, 42, 52, 70, 51, 53, 23, 53, 65, 84],
  },
  {
    name: "GMX Delta Neutral",
    data: [36, 44, 34, 57, 34, 99, 23, 18, 15, 55, 33, 77],
  },
];

const options2 = {
  colors: ["#32b5c7", "#9075ff", "#4056d1"],
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#46474B",
        fontFamily: "Proxima Nova, sans-serif",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    min: 10,
    max: 100,
    tickAmount: 3,
    labels: {
      style: {
        colors: "#46474B",
        fontFamily: "Proxima Nova, sans-serif",
        fontSize: "12px",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
};

type Props = {
  graphIndexes: Array<number>;
};

const Tabs = ({ graphIndexes }: Props) => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className={styles.vaults__tabs}>
        <div
          className={`${styles.vaults__tab} ${basic.body1} ${
            tab === 0 ? styles.active : ""
          }`}
          onClick={() => setTab(0)}
        >
          Vault Position
        </div>

        <div
          className={`${styles.vaults__tab} ${basic.body1} ${
            tab === 1 ? styles.active : ""
          }`}
          onClick={() => setTab(1)}
        >
          APY percentage
        </div>

        <div
          className={`${styles.vaults__tab} ${basic.body1} ${
            tab === 2 ? styles.active : ""
          }`}
          onClick={() => setTab(2)}
        >
          APY percentage
        </div>
      </div>

      {tab === 0 && (
        <div className={styles.vaults__chart_wrap}>
          <ApexCharts
            options={{
              ...options2,
              colors: graphIndexes.map((value) => options2.colors[value]),
            }}
            series={graphIndexes.map((value) => series2[value])}
            type="area"
            height="100%"
          />
        </div>
      )}

      {tab === 1 && (
        <div className={styles.vaults__chart_wrap}>
          <ApexCharts
            options={{
              ...options2,
              colors: graphIndexes.map((value) => options2.colors[value]),
            }}
            series={graphIndexes.map((value) => series2[value])}
            type="area"
            height="100%"
          />
        </div>
      )}

      {tab === 2 && (
        <div className={styles.vaults__chart_wrap}>
          <ApexCharts
            options={{
              ...options2,
              colors: graphIndexes.map((value) => options2.colors[value]),
            }}
            series={graphIndexes.map((value) => series2[value])}
            type="area"
            height="100%"
          />
        </div>
      )}
    </>
  );
};

export default Tabs;
