import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import Info from "@/components/icons/Info";
import Label from "@/components/Label";
import Risk from "@/components/Risk";
import useEscapeKey from "@/hooks/useEscapeKey";
import { useState } from "react";
import { STRATEGIES } from "@/libs/constants";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [43, 22, 35];

const options = {
  labels: ["Maker", "Frax 3c...", "GMX D..."],
  colors: ["#32b5c7", "#9075ff", "#4056d1"],
  dataLabels: {
    enabled: false,
  },
};

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
  close: any;
};

const ModalCurrency = ({ close }: Props) => {
  useEscapeKey(close);

  const [graphIndexes, setGraphIndexes] = useState([
    STRATEGIES.MAKER,
    STRATEGIES.FRAX_3CRV,
    STRATEGIES.GMX_DELTA_Neutral,
  ]);

  const changeGraph = (index: number, checked: boolean) => {
    if (checked) {
      if (!graphIndexes.includes(index)) {
        const indexes = graphIndexes.slice();
        indexes.push(index);
        setGraphIndexes(indexes);
      }
    } else {
      if (graphIndexes.includes(index)) {
        const indexes = graphIndexes.filter((value) => {
          return value != index;
        });
        setGraphIndexes(indexes);
      }
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__content}>
          <Image
            src="/img/cross.svg"
            alt="close"
            width={22}
            height={22}
            className={styles.modal__cross}
            onClick={close}
          />

          <div className={styles.modal__currency_title_inner}>
            <Image
              src="/img/bitcoin.svg"
              alt="Bitcoin"
              width={36}
              height={36}
            />

            <p className={basic.h1}>Bitcoin 1 (wBTC)</p>

            <p className={`${basic.h1} ${styles.modal__currency_subtitle}`}>
              vault
            </p>
          </div>

          <p className={`${basic.h3} ${styles.modal__currency_text}`}>
            About this Vault
          </p>

          <p className={`${basic.body1} ${styles.modal__currency_subtext}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book when an unknown.
          </p>

          <div className={styles.modal__currency_content}>
            <div className={styles.modal__currency_content_wrapper}>
              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>Yield performance over time</p>

                <div className={styles.chart__wrap}>
                  <ApexCharts
                    options={{
                      ...options2,
                      colors: graphIndexes.map(
                        (value) => options2.colors[value]
                      ),
                    }}
                    series={graphIndexes.map((value) => series2[value])}
                    type="area"
                    height="100%"
                  />
                </div>
              </div>

              <Risk
                riskTitle="Vault Risk"
                riskValue="Medium"
                vaultTitle="Vault APY"
                vaultValue="4,56%"
              />

              <a href="#" className={styles.learn__more}>
                <Info width="24" height="24" />
                Learn more about Everbloom strategies and risks on our blog.
              </a>
            </div>

            <div className={styles.modal__currency_content_wrapper}>
              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>DeFi Strategies (3 of 5 active)</p>

                <div className={styles.stra__content}>
                  <div className={styles.stra__item}>
                    <p className={basic.caption}>Name</p>

                    <p className={basic.caption}>Yield</p>
                  </div>

                  <Label
                    index={STRATEGIES.MAKER}
                    graphIndexes={graphIndexes}
                    text="Maker"
                    procent="3,42%"
                    id="str1"
                    risk="Low"
                    status="Active"
                    link="/strategies/maker"
                    changeGraph={changeGraph}
                    details={false}
                  />

                  <Label
                    index={STRATEGIES.FRAX_3CRV}
                    graphIndexes={graphIndexes}
                    text="FRAX 3Crv"
                    procent="1,44%"
                    id="str2"
                    risk="Medium"
                    status="Active"
                    link="/strategies/frax_3crv"
                    changeGraph={changeGraph}
                    details={false}
                  />

                  <Label
                    index={STRATEGIES.GMX_DELTA_Neutral}
                    graphIndexes={graphIndexes}
                    text="GMX Delta Neutral"
                    procent="5,68%"
                    id="str3"
                    risk="High"
                    status="Inactive"
                    link="/strategies/gmx_delta_neutral"
                    changeGraph={changeGraph}
                    details={false}
                  />
                </div>
              </div>

              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>Strategy distribution</p>

                <ApexCharts options={options} series={series} type="donut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCurrency;
