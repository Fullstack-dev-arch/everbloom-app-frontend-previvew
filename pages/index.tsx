import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import styles from "@/styles/Main.module.css";
import basic from "@/styles/Basic.module.css";
import TableItem from "@/components/TableItem";
import Notify from "@/components/Notify";
import Risk from "@/components/Risk";
import Modal from "@/components/Modal";
import { useAuthValue } from "@/contexts/AuthContext";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [43, 18, 18, 21];

const options = {
  labels: ["BTC", "ETH", "USDT", "SHIB"],
  colors: ["#63C2CF", "#6072D8", "#A58FFF", "#46474B"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth" as 'smooth' | 'straight' | 'stepline' | 'smooth' | 'straight' | 'stepline',
    show: true,
    width: 2,
    colors: ['transparent']
  },
};

const series2 = [
  {
    name: "Name series",
    data: [20, 23, 24, 40, 47, 56, 50, 52, 65, 78, 80, 99],
  },
];

const options2 = {
  colors: ["#6072D8"],
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

const Home: NextPage = () => {
  const { isSignedIn } = useAuthValue();

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
    <section className={styles.main}>
      <div className={basic.container}>
        <div className={styles.main__inner}>
          {isSignedIn && (
            <Notify text="You successfully logged in! Welcome!" success />
          )}

          {isSignedIn ? (
            <>
              <div className={styles.main__welcome}>
                <Risk
                  riskTitle="Portfolio Balance"
                  riskValue="$ 2.145.346,56"
                  vaultTitle="Total Interest Earned"
                  vaultValue="$ 173.978,53"
                  blue
                />

                <div className={styles.main__range_block}>
                  <p
                    className={`${styles.main__range_block_title} ${basic.body2}`}
                  >
                    Overall APY Range
                  </p>

                  <p
                    className={`${styles.main__range_block_text} ${basic.values} hide`}
                  >
                    4,56% - 13,49%
                  </p>
                </div>
              </div>

              <div className={styles.main__charts}>
                <div className={styles.main__chart_first_wrap}>
                  <div className={styles.main__chart_first}>
                    <p className={basic.body2}>Portfolio value over time</p>

                    <div className={styles.main__chart_wrapper}>
                      <ApexCharts
                        options={options2}
                        series={series2}
                        type="area"
                        height={220}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.main__chart_second_wrap}>
                  <div className={styles.main__chart_second}>
                    <p className={basic.body2}>Asset distribution</p>

                    <div className={styles.main__chart_wrapper}>
                      <ApexCharts
                        options={options}
                        series={series}
                        type="donut"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.main__welcome}>
              <div className={styles.main__welcome_block_wrap}>
                <div className={styles.main__welcome_block}>
                  <Image
                    className={styles.main__welcome_block_icon}
                    src="/img/verify.svg"
                    alt="welcome"
                    width={81}
                    height={81}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      flexShrink: 0,
                    }}
                  />

                  <p
                    className={`${styles.main__welcome_block_text} ${basic.body1}`}
                  >
                    <span className={basic.bold}>Welcome to Everbloom</span>.
                    Our Vaults are only available for whitelisted users. Please{" "}
                    <Link href="https://everbloom.finance/contact">
                      contact us
                    </Link>{" "}
                    so we can get to know you, or{" "}
                    <a href="#" onClick={() => setIsSignInModalOpen(true)}>
                      connect your wallet
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className={styles.main__range_block}>
                <p
                  className={`${styles.main__range_block_title} ${basic.body2}`}
                >
                  Overall APY Range
                </p>

                <p
                  className={`${styles.main__range_block_text} ${basic.values} hide`}
                >
                  4,56% - 13,49%
                </p>
              </div>
            </div>
          )}

          <div className={styles.main__content_wrap}>
            <div className={styles.main__content}>
              <div className={styles.main__content_item_names}>
                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  Vault
                </p>

                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  Asset
                </p>

                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  My Assets
                </p>

                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  USD Value
                </p>

                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  APY
                </p>

                <p
                  className={`${styles.main__content_item_name} ${basic.body2}`}
                >
                  Manage funds
                </p>
              </div>

              <TableItem
                icon="/img/bitcoin.svg"
                currency="Bitcoin"
                asset="wBTC"
                myassets="0,00000 wBTC"
                value="$ 0,00"
                apy="4,56%"
              />

              <TableItem
                icon="/img/eth.svg"
                currency="Ethereum"
                asset="wETH"
                myassets="0,00000 wETH"
                value="$ 0,00"
                apy="4,56%"
              />

              <TableItem
                icon="/img/usd.svg"
                currency="USD Coin"
                asset="USDC"
                myassets="0,00000 USDC"
                value="$ 0,00"
                apy="4,56%"
              />

              <TableItem
                icon="/img/shiba.svg"
                currency="Shiba Inu"
                asset="SHIB"
                myassets="0,00000 SHIB"
                value="$ 0,00"
                apy="4,56%"
              />

              {/* <p
                    className={`${styles.main__content_item_empty} ${basic.body1}`}
                >
                    You have no transactions yet. Please connect a
                    whitelisted wallet to deposit or withdraw.
                </p> */}
            </div>
          </div>

          <p className={styles.main__active_text}>
            9 active strategies in 4 vaults
          </p>
        </div>
      </div>

      {isSignInModalOpen && <Modal close={() => setIsSignInModalOpen(false)} />}
    </section>
  );
};

export default Home;
