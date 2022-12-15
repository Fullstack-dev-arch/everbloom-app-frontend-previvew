import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import styles from "@/styles/Vaults.module.css";
import basic from "@/styles/Basic.module.css";
import Risk from "@/components/Risk";
import ButtonOutfilled from "@/components/ButtonOutfilled";
import Label from "@/components/Label";
import TransItem from "@/components/TransItem";
import ModalWithdraw from "@/components/ModalWithdraw";
import ModalDeposit from "@/components/ModalDeposit";
import Tabs from "@/components/Tabs";
import StatusLabel from "@/components/StatusLabel";
import { STRATEGIES } from "@/libs/constants";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [43, 22, 35];

const options = {
  labels: ["BTC / Maker", "BTC / Frax 3crv", "BTC / GMX Delta Neutral"],
  colors: ["#32b5c7", "#4056d1", "#9075ff"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'right' as "right" | "top" | "bottom" | "left",
    horizontalAlign: 'center' as "right" | "left" | "center" | undefined, 
    floating: false,
    fontSize: '12px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: -2,
    labels: {
        colors: undefined,
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 5
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
  },
  stroke: {
    curve: "smooth" as 'smooth' | 'straight' | 'stepline' | 'smooth' | 'straight' | 'stepline',
    show: true,
    width: 2,
    colors: ['transparent']
  },
};

const Vaults: NextPage = () => {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
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
        console.log('Indexes => ', indexes);
      }
    } else {
      if (graphIndexes.includes(index)) {
        const indexes = graphIndexes.filter((value) => {
          return value != index;
        });
        console.log('Indexes => ', indexes);
        setGraphIndexes(indexes);
      }
    }
  };

  let percentages = series.map((item, id) => {
    return <div key={id}>{item}%</div>
  });
  return (
    <section className={styles.vaults}>
      <div className={basic.container}>
        <div className={styles.vaults__inner}>
          <div className={styles.vaults__wrapper}>
            <div className={styles.vaults__wrapper_box}>
              <div className={styles.vaults__title_inner}>
                <Image
                  src="/img/bitcoin.svg"
                  alt="Bitcoin"
                  width={36}
                  height={36}
                />
                <p className={basic.h1}>Bitcoin 1 (wBTC)</p>
                <p
                  className={`${basic.h1} ${styles.vaults__currency_subtitle}`}
                >
                  vault
                </p>
                &nbsp;&nbsp;
                <StatusLabel
                  text="COMPOUNDING"
                  since="Since 14 Feb 2022"
                  alive
                />
              </div>

              <div className={styles.vaults__title_outer}>
                <Risk
                  riskTitle="Vault Risk"
                  riskValue="Medium"
                  vaultTitle="Vault APY"
                  vaultValue="4,56%"
                  medium
                />
              </div>
            </div>

            <div className={styles.vaults__wrapper_box}>
              <div className={styles.vaults__about}>
                <p className={basic.h3}>About this Vault</p>
                <p className={`${styles.vaults__text} ${basic.body1}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&rsquo;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen.
                </p>
                <br />
                <p className={`${styles.vaults__text} ${basic.body1}`}>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>

              <div className={styles.vaults__boxes}>
                <div className={styles.vaults__boxes_buttons}>
                  <ButtonOutfilled
                    text="Deposit"
                    withIcon
                    icon="/img/arrow-down.svg"
                    onClick={() => setIsDepositModalOpen(true)}
                  />

                  <ButtonOutfilled
                    text="Withdraw"
                    withIcon
                    icon="/img/arrow-up.svg"
                    onClick={() => setIsWithdrawModalOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vault__balance_wrap}>
            <div className={styles.vault__balance}>
              <div className={styles.vault__balance_item}>
                <p className={basic.body2}>Your vault position</p>

                <div className={styles.vault__balance_item_values}>
                  <p
                    className={`${basic.values} ${styles.vault__balance_currency} hide`}
                  >
                    47,7183 wBTC
                  </p>

                  <p
                    className={`${basic.values} ${styles.vault__balance_usd} hide`}
                  >
                    $ 958.665,77
                  </p>
                </div>
              </div>

              <div className={styles.vault__balance_item}>
                <p className={basic.body2}>Earned interests</p>

                <div className={styles.vault__balance_item_values}>
                  <p
                    className={`${basic.values} ${styles.vault__balance_currency} hide`}
                  >
                    0,3352 wBTC
                  </p>

                  <p
                    className={`${basic.values} ${styles.vault__balance_usd} hide`}
                  >
                    $ 6.730,46
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal__currency_content}>
            <div className={styles.modal__currency_content_wrapper}>
              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>Yield performance over time</p>

                <Tabs graphIndexes={graphIndexes} />
              </div>
            </div>

            <div className={styles.modal__currency_content_wrapper}>
              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>DeFi Strategies (2 of 3 active)</p>

                <div className={styles.stra__content}>
                  <div className={styles.stra__item}>
                    <p className={`${styles.stra__item_name} ${basic.caption}`}>
                      Name
                    </p>

                    <p
                      className={`${styles.stra__item_yield} ${basic.caption}`}
                    >
                      Yield
                    </p>

                    <p className={`${styles.stra__item_risk} ${basic.caption}`}>
                      Risk
                    </p>

                    <p
                      className={`${styles.stra__item_status} ${basic.caption}`}
                    >
                      Status
                    </p>
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
                  />
                </div>
              </div>

              <div className={styles.modal__currency_over_chart_inner}>
                <p className={basic.body2}>Strategy distribution</p>

                <div className={styles.vaults__chart2_wrap}>
                  <ApexCharts options={options} series={series} type="donut" />
                  <div className={styles.valuts__chart2_percent}>
                    {percentages}
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.vault__table_inner}>
            <p className={basic.h3}>Deposits and Withdrawals</p>

            <div className={styles.vault__table_wrap}>
              <div className={styles.vault__table}>
                <div className={styles.vault__table_item}>
                  <p className={basic.body2}>Amount</p>
                  <p className={basic.body2}>Type</p>
                  <p className={basic.body2}>Transaction Hash</p>
                  <p className={basic.body2}>Date</p>
                </div>

                <TransItem
                  value="2,00000 wBTC"
                  event="Deposit"
                  hash="0xbccba942735d5cc3a4a3053c..."
                  copyText="0xbccba942735d5cc3a4a3053c0xbccba942735d5cc3a4a3053c"
                  date="28 Aug 2022 13:43:55"
                />

                <TransItem
                  value="0,03175 wBTC"
                  event="Withdrawal"
                  hash="0xbccba942735d5cc3a4a3053c..."
                  copyText="0xbccba942735d5cc3a4a3053c0xbccba942735d5cc3a4a3053c"
                  date="28 Aug 2022 13:43:55"
                  negative
                />

                <TransItem
                  value="2,00000 wBTC"
                  event="Deposit"
                  hash="0xbccba942735d5cc3a4a3053c..."
                  copyText="0xbccba942735d5cc3a4a3053c0xbccba942735d5cc3a4a3053c"
                  date="28 Aug 2022 13:43:55"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isWithdrawModalOpen && (
        <ModalWithdraw close={() => setIsWithdrawModalOpen(false)} />
      )}
      {isDepositModalOpen && (
        <ModalDeposit close={() => setIsDepositModalOpen(false)} />
      )}
    </section>
  );
};

export default Vaults;
